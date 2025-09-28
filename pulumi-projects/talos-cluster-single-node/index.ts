import * as fs from "node:fs";
import * as path from "node:path";
import * as cloudflare from "@pulumi/cloudflare";
import * as hcloud from "@pulumi/hcloud";
import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import * as talos from "@pulumiverse/talos";
import * as time from "@pulumiverse/time";
import * as traefik from "./packages/kubernetes-crds-traefik/traefik";

/**
 * [Pulumi:Configuration]
 */
//#region Pulumi:Configuration
const config = new pulumi.Config();

/**
 * Cluster name used in the Talos configuration files and in the generated kubeconfig context
 * We use cluster.name from config or fall back to the current stack name
 */
const clusterName: string = config.get("clusterName") || pulumi.getStack();

/**
 * Common server configuration for controlplane and worker nodes
 *
 * Example resulting Kubernetes node labels:
 *
 *   beta.kubernetes.io/arch=arm64
 *   kubernetes.io/arch=arm64
 *   kubernetes.io/hostname=talos-controlplane
 *   kubernetes.io/os=linux
 *   node-role.kubernetes.io/control-plane=
 *
 * Node labels applied by the Hetzner Cloud Controller Manager (hcloud-cloud-controller-manager):
 *   instance.hetzner.cloud/provided-by=cloud
 *   node.kubernetes.io/instance-type=cax11
 *   topology.kubernetes.io/region=nbg1
 *   topology.kubernetes.io/zone=nbg1-dc3
 */

const defaultLabels = {
	"provisioned-by": "pulumi",
	"pulumi-organization": pulumi.getOrganization(),
	"pulumi-project": pulumi.getProject(),
	"pulumi-stack": pulumi.getStack(),
	"talos-cluster": clusterName,
};

// const cloudflareAccountId: string = "a22cac4379fd6fff1ede31d3efb7841e";
const cloudflareZoneId: string =
	config.requireObject<CloudflareConfig>("cloudflare").zone.id ||
	"e7b95bfe4563d33b2520138e8ef75761";

/**
 * We use ${clusterName}.k8s.nifr.de as the FQDN for our Talos cluster
 * We create a DNS A record for ${clusterName}.k8s.nifr.de
 * We create a wildcard DNS record for *.${clusterName}.k8s.nifr.de
 */
const domain =
	config.getObject<CloudflareConfig>("cloudflare")?.zone?.domain || "nifr.de";
const subdomain: string = "k8s";
const fqdn = `${clusterName}${subdomain ? `.${subdomain}` : ""}.${domain}`;

/**
 * This is the image ID for the ISO we uploaded to Hetzner Cloud with `hcloud-upload-image [..]`
 */
const serverImageId: string =
	config.getObject<HetznerConfig>("hcloud")?.image?.id || "316900484";

if (!serverImageId) {
	throw new Error("Server image ID not found in Pulumi config 'hcloud'.");
}

/**
 * This is the Talos version we want to install on our servers.
 */
const talosVersion: string = "v1.11.0";

/**
 * Hetzner location where our Talos server will be created.
 * see: `hcloud location list` or run `./bin/hcloud-location`
 */
const location: HetznerLocation = "nbg1";

/**
 * Hetzner datacenter where our Talos server and IP will be created.
 * There is currently only one datacenter per location.
 * The datacenter name is required to create the server's primary IP (v4).
 * see: https://docs.hetzner.com/cloud/general/locations/#what-datacenters-are-there
 */
const datacenter: HetznerDatacenterAtLocation<typeof location> = "nbg1-dc3";

const serverType: HetznerServerType = "cax31";

// const registryPasswordGithub =
// 	config.requireSecretObject<RegistryAuthConfig>("registries")["ghcr.io"]
// 		.password;

// if (!registryPasswordGithub) {
// 	throw new Error(
// 		"Registry password for 'ghcr.io' not found in Pulumi config 'registries'.",
// 	);
// }

//#endregion Pulumi:Configuration

/**
 * [Talos:Configuration]
 */
//#region Talos:Configuration
const talosSecrets: talos.machine.Secrets = new talos.machine.Secrets(
	"secrets",
	{
		talosVersion,
	},
	{ ignoreChanges: ["*"] },
);

const serverIp = new hcloud.PrimaryIp("hcloud-primaryIp", {
	name: `talos-cluster-${clusterName}-ipv4`,
	assigneeType: "server",
	type: "ipv4",
	datacenter,
	autoDelete: false,
	labels: {
		...defaultLabels,
	},
});

const talosClientConfiguration = talos.client.getConfigurationOutput(
	{
		clusterName: clusterName,
		clientConfiguration: talosSecrets.clientConfiguration.apply(
			(secrets) => secrets,
		),
		endpoints: [serverIp.ipAddress],
		nodes: [serverIp.ipAddress],
	} as talos.client.GetConfigurationOutputArgs,
	{
		parent: talosSecrets,
		dependsOn: [talosSecrets, serverIp],
	},
);

talosClientConfiguration.talosConfig.apply((config) => {
	console.log(`[${new Date().toISOString()}] Writing talosconfig to disk ...`);
	try {
		fs.writeFileSync(path.join(__dirname, "talosconfig"), config, {
			encoding: "utf8",
			flag: "w",
		});
		console.log(
			`[${new Date().toISOString()}] talosconfig written to disk successfully.`,
		);
	} catch (error) {
		console.log(
			`[${new Date().toISOString()}] Error writing talosconfig to disk:`,
			error,
		);
	}
	return config;
});
export const talosconfig = talosClientConfiguration.talosConfig;

const talosMachineConfiguration = talos.machine.getConfigurationOutput(
	{
		clusterName: clusterName,
		// must be one of: ["controlplane" "worker"]
		machineType: "controlplane",
		clusterEndpoint: serverIp.ipAddress.apply((ip) => `https://${ip}:6443`),
		machineSecrets: talosSecrets.machineSecrets,
		talosVersion: talosSecrets.talosVersion,
		docs: false,
		examples: false,
		configPatches: [
			/**
			 * We set a custom hostname on our Talos host
			 */
			JSON.stringify({
				machine: {
					network: {
						hostname: fqdn,
					},
				},
			}),
			/**
			 * We configure custom nameservers the Talos host should use
			 * see: https://quad9.net
			 */
			JSON.stringify({
				machine: {
					network: {
						nameservers: ["9.9.9.9", "149.112.112.112"],
					},
				},
			}),
			/**
			 * Enable host DNS feature
			 *   - Talos starts a DNS caching server on the host on address 127.0.0.53:53
			 *   - IP 169.254.116.108 is allocated for the host DNS server and used by kube-dns
			 *   - kube-dns service forwards all DNS requests to the host DNS server
			 *   - host can communicate with other cluster members by name
			 * see: https://www.talos.dev/v1.11/talos-guides/network/host-dns/
			 */
			JSON.stringify({
				machine: {
					features: {
						hostDNS: {
							enabled: true,
							forwardKubeDNSToHost: true,
							resolveMemberNames: true,
						},
					},
				},
			}),
			/**
			 * We configure custom NTP servers the server should use
			 * The /dev/ptp0 device is provided by the Hetzner host "hardware" and should provide
			 * very accurate time synchronization from the Hypervisor to the guest OS (Talos).
			 *
			 * see: https://www.talos.dev/v1.11/talos-guides/configuration/time-sync/
			 */
			JSON.stringify({
				machine: {
					time: {
						disabled: false,
						bootTimeout: "1m",
						servers: [
							//// By default, Talos Linux uses "time.cloudflare.com" as the NTP server
							"/dev/ptp0",
							"ntp1.hetzner.de",
							"ntp2.hetzner.com",
							"ntp3.hetzner.net",
						],
					},
				},
			}),
			/**
			 * Network interface configuration with dhcp and floating virtual ip (vip)
			 * see: https://www.talos.dev/v1.11/advanced/advanced-networking/
			 */
			// JSON.stringify({
			// 	machine: {
			// 		network: {
			// 			interfaces: [
			// 				{
			// 					interface: "eth0",
			// 					dhcp: true,
			// 					vip: null,
			// 				},
			// 				{
			// 					interface: "eth1",
			// 					dhcp: true,
			// 					vip: {
			// 						ip: floatingIpAddress,
			// 						hcloud: {
			// 							apiToken: config.requireSecret("hetznerToken"),
			// 						},
			// 					},
			// 				},
			// 			],
			// 		},
			// 	},
			// }),
			/**
			 * see: https://www.talos.dev/v1.10/kubernetes-guides/configuration/pod-security/
			 * in order to relax the PodSecurity admission controller for the traefik namespace
			 * command example:
			 * kubectl label ns traefik pod-security.kubernetes.io/enforce=privileged
			 */
			JSON.stringify({
				cluster: {
					apiServer: {
						admissionControl: [
							{
								name: "PodSecurity",
								configuration: {
									exemptions: {
										// note: namespace "kube-system" is already in the default exemptions
										namespaces: ["traefik-system", "metallb-system"],
									},
								},
							},
						],
					},
				},
			}),
			/**
			 * enable external cloud provider
			 */
			// JSON.stringify({
			// 	machine: {
			// 		kubelet: {
			// 			extraArgs: {
			// 				"cloud-provider": "external",
			// 			},
			// 		},
			// 	},
			// 	cluster: {
			// 		externalCloudProvider: {
			// 			enabled: true,
			// 		},
			// 		controllerManager: {
			// 			extraArgs: {
			// 				"cloud-provider": "external",
			// 			},
			// 		},
			// 	},
			// }),
			/**
			 * enable prometheus metrics endpoint(s)
			 *   - on port 11234 for containerd
			 *   - on port 2381 for etcd
			 * see: https://www.talos.dev/latest/talos-guides/configuration/containerd/
			 * see: https://etcd.io/docs/latest/metrics/
			 */
			JSON.stringify({
				machine: {
					files: [
						{
							content: `[metrics]\n  address = "0.0.0.0:11234"`,
							path: "/etc/cri/conf.d/20-customization.part",
							op: "create",
						},
					],
				},
				cluster: {
					controllerManager: {
						extraArgs: {
							"bind-address": "0.0.0.0",
						},
					},
					etcd: {
						extraArgs: {
							"listen-metrics-urls": "http://0.0.0.0:2381",
						},
					},
				},
			}),
			/**
			 * Allow cloud controller to manage all service node ports (30000-32767 by default)
			 */
			JSON.stringify({
				cluster: {
					apiServer: {
						extraArgs: {
							"service-node-port-range": "1-65535",
						},
					},
				},
			}),
			/**
			 * In order to allow scheduling pods on control plane nodes we need to set
			 * config key "cluster.allowSchedulingOnControlPlanes" to true
			 * see: https://www.talos.dev/v1.7/talos-guides/howto/workers-on-controlplane/
			 */
			JSON.stringify({
				cluster: {
					allowSchedulingOnControlPlanes: true,
				},
			}),
			// Disable ipv6 on the host OS level
			// see: https://www.talos.dev/v1.11/reference/configuration/v1alpha1/config/#Config.machine.install.extraKernelArgs
			JSON.stringify({
				machine: {
					install: {
						extraKernelArgs: ["ipv6.disable=1"],
					},
				},
			}),
			//// see: https://www.talos.dev/v1.11/reference/configuration/v1alpha1/config/#Config.machine.registries.config.-
			//// see: https://www.talos.dev/v1.11/reference/configuration/v1alpha1/config/#Config.machine.registries.config.-.auth
			// JSON.stringify({
			// 	machine: {
			// 		registries: {
			// 			config: {
			// 				"ghcr.io": {
			// 					auth: {
			// 						//// base64 encoded auth string -> "${username}:${password}" -> base64
			// 						auth: "XXXXX",
			// 						//// alternative: use username & password
			// 						// username: "_token",
			// 						// password: registryPasswordGithub.apply(
			// 						// 	(password) => password,
			// 						// ),
			// 					},
			// 					tls: {
			// 						insecureSkipVerify: false,
			// 					},
			// 				},
			// 			},
			// 		},
			// 	},
			// }),
		],
	} as talos.machine.GetConfigurationOutputArgs,
	{
		parent: talosSecrets,
		dependsOn: [talosSecrets, serverIp],
	},
);
export const machineconfig = talosMachineConfiguration.machineConfiguration;
//#endregion Talos:Configuration

/**
 * [HCloud Server]
 */
//#region HCloud:Server
const serverFirewall = new hcloud.Firewall("talos-cluster-talos-firewall", {
	name: `talos-cluster-${clusterName}-firewall`,
	rules: [
		{
			direction: "in",
			protocol: "tcp",
			port: "80",
			sourceIps: ["0.0.0.0/0", "::/0"],
		},
		{
			direction: "in",
			protocol: "tcp",
			port: "443",
			sourceIps: ["0.0.0.0/0", "::/0"],
		},
		{
			direction: "in",
			protocol: "tcp",
			port: "6443",
			sourceIps: ["0.0.0.0/0", "::/0"],
		},
		{
			direction: "in",
			protocol: "tcp",
			port: "50000",
			sourceIps: ["0.0.0.0/0", "::/0"],
		},
		{
			direction: "in",
			protocol: "tcp",
			port: "50001",
			sourceIps: ["0.0.0.0/0", "::/0"],
		},
		/**
		 * IPv6 rules
		 * Example: Allow incoming HTTP traffic from any IPv6 address
		 */
		// {
		// 	direction: "in",
		// 	protocol: "tcp",
		// 	port: "80",
		// 	sourceIps: ["::/0"],
		// },
		/**
		 * All outgoing traffic is ALLOWED (not blocked) by default
		 * Outgoing rules are only needed if you want to restrict outgoing traffic
		 * Example: Block all outgoing IPv6 traffic
		 */
		// {
		// 	direction: "out",
		// 	protocol: "tcp",
		// 	port: "1-65535",
		// 	destinationIps: ["::/0"],
		// },
	],
});

// talosMachineConfiguration.machineConfiguration.apply((userData) =>
// 	console.log(userData),
// );

const server = new hcloud.Server(
	"hcloud-server",
	{
		name: `talos-cluster-${clusterName}-server`,
		location,
		serverType,
		image: serverImageId,
		userData: talosMachineConfiguration.machineConfiguration,
		publicNets: [
			{
				ipv4Enabled: true,
				ipv4: serverIp.id.apply((id) => Number.parseInt(id, 10)),
				ipv6Enabled: false,
			},
		],
		labels: {
			...defaultLabels,
			os: "talos",
			"talos-machine-type": "single-node",
		},
		firewallIds: [serverFirewall.id.apply((id) => Number.parseInt(id, 10))],
	},
	{
		parent: talosSecrets,
		dependsOn: [serverIp, talosSecrets],
		deleteBeforeReplace: true,
		replaceOnChanges: ["userData"],
		ignoreChanges: [
			"userData" /* don't replace server on talos config changes */,
		],
	},
);
//#endregion HCloud:Server

/**
 * [Talos:Bootstrap]
 */
//#region Talos:Bootstrap
const talosBootstrap = new talos.machine.Bootstrap(
	"talos-cluster-bootstrap",
	{
		node: serverIp.ipAddress,
		clientConfiguration: talosSecrets.clientConfiguration,
	},
	{
		parent: server,
		dependsOn: [talosSecrets, serverIp, server],
	},
);

const talosKubeconfig: pulumi.Output<talos.cluster.GetKubeconfigResult> =
	talos.cluster.getKubeconfigOutput(
		// see: https://www.pulumi.com/registry/packages/talos/api-docs/cluster/getkubeconfig/#using
		{
			clientConfiguration: talosSecrets.clientConfiguration,
			node: serverIp.ipAddress,
		},
		{
			parent: server,
			dependsOn: [talosBootstrap],
		},
	);

export const kubeconfig = talosKubeconfig.kubeconfigRaw;

talosKubeconfig.kubeconfigRaw.apply((config) => {
	console.log(`[${new Date().toISOString()}] Writing kubeconfig to disk ...`);
	try {
		fs.writeFileSync(path.join(__dirname, "kubeconfig"), config, {
			encoding: "utf8",
			flag: "w",
		});
		console.log(
			`[${new Date().toISOString()}] kubeconfig written to disk successfully.`,
		);
		pulumi.log.info(
			`[${new Date().toISOString()}] Starting Talos cluster health check...`,
		);
	} catch (error) {
		console.log(
			`[${new Date().toISOString()}] Error writing kubeconfig to disk:`,
			error,
		);
	}
	return config;
});

/**
 * We perform a health check on the Talos cluster.
 * Analogue to running `talosctl health` from the command line.
 *
 * Example Pulumi error/output if the health check fails:
 * > Error: invocation of talos:cluster/getHealth:getHealth returned an error: cluster health check failed: context deadline exceeded
 */
const talosHealthCheck: pulumi.Output<talos.cluster.GetHealthResult> =
	talos.cluster.getHealthOutput(
		// see: https://www.pulumi.com/registry/packages/talos/api-docs/cluster/gethealth/#using
		{
			clientConfiguration: talosSecrets.clientConfiguration,
			endpoints: [serverIp.ipAddress],
			controlPlaneNodes: [serverIp.ipAddress],
			skipKubernetesChecks: false,
			timeouts: {
				read: "3m",
			},
		},
		{
			parent: talosBootstrap,
			dependsOn: [talosBootstrap],
		},
	);

talosHealthCheck.apply(() => {
	console.log(
		`[${new Date().toISOString()}] Talos cluster health check finished.`,
	);
});

const wait3Minutes = new time.Sleep(
	"wait3Minutes",
	{ createDuration: "3m" },
	{
		parent: talosBootstrap,
		dependsOn: [talosBootstrap],
	},
);
//#endregion Talos:Bootstrap

/**
 * [Kubernetes]
 */
//#region Kubernetes

//#region Pulumi:Provider
const k8sProvider = new k8s.Provider(
	"talos-cluster-pulumi-k8s-provider",
	{
		kubeconfig: kubeconfig,
	},
	{
		parent: talosBootstrap,
		dependsOn: [talosBootstrap, wait3Minutes],
	},
);
//#endregion Pulumi:Provider

/**
 * [Kubernetes:MetalLb]
 */
//#region MetalLB
const metalLbNamespace = new k8s.core.v1.Namespace(
	"metallb-namespace",
	{
		metadata: {
			name: "metallb-system",
			labels: {
				"pod-security.kubernetes.io/enforce": "privileged",
				"pod-security.kubernetes.io/audit": "privileged",
				"pod-security.kubernetes.io/warn": "privileged",
			},
		},
	},
	{ provider: k8sProvider, dependsOn: [k8sProvider], deletedWith: server },
);

/**
 * see: https://metallb.io/installation/#installation-with-helm
 * see: https://github.com/metallb/metallb/tree/main/charts/metallb
 */
const metalLbHelmChart = new k8s.helm.v4.Chart(
	"helm-chart-metallb",
	{
		chart: "metallb",
		/**
		 * helm search repo metallb --versions
		 */
		version: "0.15.2",
		repositoryOpts: {
			repo: "https://metallb.github.io/metallb",
		},
		dependencyUpdate: true,
		skipAwait: false,
		skipCrds: false,
		namespace: metalLbNamespace.metadata.name,
		values: {},
	},
	{
		provider: k8sProvider,
		dependsOn: [metalLbNamespace],
		deletedWith: metalLbNamespace,
	},
);

/**
 * We create a MetalLB "IPAddressPool" that consists of the dynamic IP assigned to our server.
 * This allows MetalLB to assign this IP to "LoadBalancer" services in our cluster.
 */
const metalLbIpAddressPool = new k8s.apiextensions.CustomResource(
	"metallb-ipaddresspool",
	{
		apiVersion: "metallb.io/v1beta1",
		kind: "IPAddressPool",
		metadata: {
			name: "hetzner-server-dynamic-ipv4",
			namespace: pulumi.interpolate`${metalLbNamespace.metadata.name}`,
		},
		spec: {
			addresses: [pulumi.interpolate`${serverIp.ipAddress}/32`],
		},
	},
	{
		provider: k8sProvider,
		// parent: metalLbHelmChart,
		dependsOn: [metalLbHelmChart],
		deletedWith: metalLbNamespace,
	},
);

/**
 * We create a MetalLB "L2Advertisement" that uses the "IPAddressPool" we created above.
 * If we expose a type "LoadBalancer" service in our cluster, MetalLB will allocate
 * an IP from the pool above and set it as the "ExternalIP" of the service.
 */
const metalLbL2Advertisement = new k8s.apiextensions.CustomResource(
	"metallb-l2-advertisement",
	{
		apiVersion: "metallb.io/v1beta1",
		kind: "L2Advertisement",
		metadata: {
			name: "default-l2-advertisement",
			namespace: metalLbNamespace.metadata.name,
		},
		spec: {
			ipAddressPools: [metalLbIpAddressPool.metadata.name],
		},
	},
	{
		provider: k8sProvider,
		// parent: metalLbHelmChart,
		dependsOn: [metalLbIpAddressPool],
		deletedWith: metalLbNamespace,
	},
);
//#endregion MetalLB

/**
 * [Kubernetes:Traefik]
 */
//#region Traefik

/**
 * Create a namespace for traefik
 * see: https://doc.traefik.io/traefik/setup/kubernetes/#add-the-chart-repo-and-namespace
 */
const traefikNamespace = new k8s.core.v1.Namespace(
	"traefik-namespace",
	{
		metadata: {
			name: "traefik",
			labels: {
				"pod-security.kubernetes.io/enforce": "privileged",
				"pod-security.kubernetes.io/audit": "privileged",
				"pod-security.kubernetes.io/warn": "privileged",
			},
		},
	},
	{
		provider: k8sProvider,
		dependsOn: [k8sProvider, metalLbL2Advertisement],
		deletedWith: server,
	},
);

/**
 * Install the traefik Helm chart as the Ingress controller for the cluster
 *
 * see: https://metallb.io/installation/#installation-with-helm
 * see: https://github.com/metallb/metallb/tree/main/charts/metallb
 */
const traefikHelmChart = new k8s.helm.v4.Chart(
	"traefik-helm-chart",
	{
		/**
		 * note: if a folder exists with the same name as the chart, Pulumi will try to use it
		 */
		chart: "traefik",
		/**
		 * helm search repo traefik --versions
		 */
		version: "37.1.1",
		repositoryOpts: {
			repo: "https://traefik.github.io/charts",
		},
		dependencyUpdate: true,
		skipAwait: false,
		skipCrds: true,
		namespace: traefikNamespace.metadata.name,
		/**
		 * helm show values traefik/traefik
		 */
		values: {
			logs: {
				general: {
					level: "DEBUG",
					format: "json",
				},
				access: {
					enabled: true,
					format: "json",
				},
			},
			ingressRoute: {
				dashboard: {
					enabled: false,
				},
			},
			providers: {
				kubernetesCRD: {
					enabled: true,
					allowCrossNamespace: true,
					allowExternalNameServices: true,
				},
				kubernetesIngress: {
					enabled: true,
					allowExternalNameServices: true,
					allowEmptyServices: true,
				},
			},
			experimental: {
				kubernetesGateway: {
					enabled: true,
				},
			},
		},
	},
	{
		provider: k8sProvider,
		dependsOn: [traefikNamespace],
		deletedWith: traefikNamespace,
	},
);

/**
 * Install the traefik CRDs
 */
const traefikCrdHelmChart = new k8s.helm.v4.Chart(
	"traefik-helm-chart-crds",
	{
		repositoryOpts: {
			repo: "https://traefik.github.io/charts",
		},
		chart: "traefik-crds",
		/**
		 * helm search repo traefik --versions
		 */
		version: "1.11.0",
		dependencyUpdate: true,
		skipAwait: false,
		skipCrds: false,
		namespace: traefikNamespace.metadata.name,
		/**
		 * helm show values traefik/traefik
		 */
		values: {},
	},
	{
		provider: k8sProvider,
		dependsOn: [traefikNamespace, traefikHelmChart],
		deletedWith: traefikNamespace,
	},
);

const traefikSecretTLSCertificateDefault = new k8s.core.v1.Secret(
	"traefik-secret-tls-certificate-default",
	{
		metadata: {
			name: "traefik-tls-certificate-default",
			namespace: traefikNamespace.metadata.name,
		},
		stringData: {
			"tls.key": fs.readFileSync(
				path.join(__dirname, ".lego", "certificates", `${fqdn}.key`),
				{
					encoding: "utf8",
				},
			),
			"tls.crt": fs.readFileSync(
				path.join(__dirname, ".lego", "certificates", `${fqdn}.crt`),
				{
					encoding: "utf8",
				},
			),
		},
	},
	{
		parent: traefikNamespace,
		dependsOn: [traefikNamespace],
		deletedWith: traefikNamespace,
	},
);

const traefikTlsStoreDefault = new traefik.v1alpha1.TLSStore(
	"traefik-tls-store-default",
	{
		metadata: {
			name: "default",
			namespace: traefikNamespace.metadata.name,
		},
		spec: {
			defaultCertificate: {
				secretName: traefikSecretTLSCertificateDefault.metadata.name,
			},
		},
	},
	{
		parent: traefikNamespace,
		dependsOn: [traefikSecretTLSCertificateDefault, traefikCrdHelmChart],
		deletedWith: traefikNamespace,
	},
);

const traefikMiddlewareRedirectToHttps = new traefik.v1alpha1.Middleware(
	"traefik-middleware-redirect-to-https",
	{
		metadata: {
			name: "redirect-to-https",
			namespace: traefikNamespace.metadata.name,
		},
		spec: {
			redirectScheme: {
				scheme: "https",
				permanent: true,
			},
		},
	},
	{
		parent: traefikNamespace,
		dependsOn: [traefikNamespace, traefikCrdHelmChart],
		deletedWith: traefikNamespace,
	},
);

const traefikMiddlewareRedirectToDashboard = new traefik.v1alpha1.Middleware(
	"traefik-middleware-redirect-to-dashboard",
	{
		metadata: {
			name: "redirect-to-dashboard",
			namespace: traefikNamespace.metadata.name,
		},
		spec: {
			redirectRegex: {
				regex: "^(http://([[w:.]+]|[w._-]+)(:d+)?)/$",
				replacement: "${1}/dashboard/",
				permanent: false,
			},
		},
	},
	{
		parent: traefikNamespace,
		dependsOn: [traefikNamespace, traefikCrdHelmChart],
	},
);

const traefikDashboardIngressRoute = new traefik.v1alpha1.IngressRoute(
	"traefik-dashboard-ingress-route",
	{
		metadata: {
			name: "traefik-dashboard",
			namespace: traefikNamespace.metadata.name,
		},
		spec: {
			entryPoints: ["web", "websecure"],
			routes: [
				{
					match: `Host(\`traefik.${fqdn}\`)`,
					kind: "Rule",
					services: [
						{
							name: "api@internal",
							kind: "TraefikService",
						},
					],
					middlewares: [
						{
							name: traefikMiddlewareRedirectToHttps.metadata.name,
							namespace: traefikNamespace.metadata.name,
						},
						{
							name: traefikMiddlewareRedirectToDashboard.metadata.name,
							namespace: traefikNamespace.metadata.name,
						},
					],
				},
			],
			tls: {},
		},
	},
	{
		parent: traefikNamespace,
		dependsOn: [
			traefikMiddlewareRedirectToHttps,
			traefikCrdHelmChart,
			traefikTlsStoreDefault,
		],
		deletedWith: traefikNamespace,
	},
);

//#endregion Traefik

/**
 * [Kubernetes:Dashboard]
 */
//#region Kubernetes:Dashboard
const kubernetesDashboardNamespace = new k8s.core.v1.Namespace(
	"kubernetes-dashboard-namespace",
	{
		metadata: {
			name: "kubernetes-dashboard",
			labels: {
				"pod-security.kubernetes.io/enforce": "privileged",
				"pod-security.kubernetes.io/audit": "privileged",
				"pod-security.kubernetes.io/warn": "privileged",
			},
		},
	},
	{
		provider: k8sProvider,
		dependsOn: [k8sProvider],
		deletedWith: server,
	},
);

const kubernetesDashboardClusterRoleBinding =
	new k8s.rbac.v1.ClusterRoleBinding(
		`kubernetes-dashboard-cluster-role-binding`,
		{
			metadata: {
				name: "kubernetes-dashboard",
			},
			roleRef: {
				apiGroup: "rbac.authorization.k8s.io",
				kind: "ClusterRole",
				name: "cluster-admin",
			},
			subjects: [
				{
					kind: "ServiceAccount",
					name: "kubernetes-dashboard",
					namespace: kubernetesDashboardNamespace.metadata.name,
				},
			],
		},
		{
			parent: kubernetesDashboardNamespace,
			dependsOn: [kubernetesDashboardNamespace],
		},
	);

const kubernetesDashboardHelmChart = new k8s.helm.v4.Chart(
	"helm-chart-kubernetes-dashboard",
	{
		chart: "kubernetes-dashboard",
		/**
		 *
		 * helm search repo kubernetes-dashboard --versions
		 */
		version: "7.13.0",
		repositoryOpts: {
			repo: "https://kubernetes.github.io/dashboard/",
		},
		dependencyUpdate: true,
		skipAwait: false,
		skipCrds: false,
		namespace: kubernetesDashboardNamespace.metadata.name,
		values: {
			enableInsecureLogin: true,
			ingress: {
				enabled: true,
				annotations: {
					"traefik.ingress.kubernetes.io/router.entrypoints": "websecure",
					"traefik.ingress.kubernetes.io/router.tls": "true",
					"traefik.ingress.kubernetes.io/router.middlewares": `${traefikNamespace.metadata.name}/${traefikMiddlewareRedirectToHttps.metadata.name}@kubernetescrd`,
				},
				hosts: [`dashboard.${fqdn}`],
				tls: {},
			},
		},
	},
	{
		provider: k8sProvider,
		dependsOn: [kubernetesDashboardNamespace, traefikTlsStoreDefault],
		deletedWith: kubernetesDashboardNamespace,
	},
);

const kubernetesDashboardTraefikServersTransport =
	new traefik.v1alpha1.ServersTransport(
		"kubernetes-dashboard-traefik-servers-transport-tls-insecure-skip-verify",
		{
			metadata: {
				name: "kubernetes-dashboard-tls-skip-verify",
				namespace: kubernetesDashboardNamespace.metadata.name,
			},
			spec: {
				insecureSkipVerify: true,
			},
		},
		{
			parent: kubernetesDashboardNamespace,
			dependsOn: [kubernetesDashboardNamespace, traefikCrdHelmChart],
			deletedWith: kubernetesDashboardNamespace,
		},
	);
//#endregion Kubernetes:Dashboard

/**
 * [Cloudflare DNS]
 * We use a "get" function to fetch an existing Cloudflare zone by its ID.
 * see: https://www.pulumi.com/docs/iac/concepts/functions/get-functions/
 */
//#region Cloudflare
const cloudflareZone = cloudflare.Zone.get("cloudflare-zone", cloudflareZoneId);

const cloudflareDnsRecordMain = new cloudflare.DnsRecord(
	"cloudflare-dns-record-main",
	{
		zoneId: cloudflareZoneId,
		name: `${fqdn}`,
		type: "A",
		ttl: 0,
		comment: `A record for ${fqdn}`,
		content: serverIp.ipAddress,
		proxied: false,
	},
);

const cloudflareDnsRecordWildcard = new cloudflare.DnsRecord(
	"cloudflare-dns-record-wildcard",
	{
		zoneId: cloudflareZoneId,
		name: `*.${fqdn}`,
		type: "A",
		ttl: 0,
		comment: `A record for *.${fqdn}`,
		content: serverIp.ipAddress,
		proxied: false,
	},
);
//#endregion Cloudflare
//#endregion Kubernetes

/**
 * [Pulumi:Exports]
 */
//#region Pulumi:Exports
const cloudflareExport = {
	account: {
		id: cloudflareZone.account.id,
	},
	dns: {
		zone: {
			id: cloudflareZone.id,
			name: cloudflareZone.name,
		},
		records: [
			{
				id: cloudflareDnsRecordMain.id,
				name: cloudflareDnsRecordMain.name,
				type: cloudflareDnsRecordMain.type,
				content: cloudflareDnsRecordMain.content,
			},
			{
				id: cloudflareDnsRecordWildcard.id,
				name: cloudflareDnsRecordWildcard.name,
				type: cloudflareDnsRecordWildcard.type,
				content: cloudflareDnsRecordWildcard.content,
			},
		],
	},
};
export { cloudflareExport as cloudflare };

const hcloudExport = {
	server: {
		id: server.id,
		name: server.name,
		status: server.status,
		type: server.serverType,
		location: server.location,
		datacenter: server.datacenter,
		ipAddress: serverIp.ipAddress,
	},
};
export { hcloudExport as hcloud };

// pulumi stack output --json --show-secrets | jq -r '.talos.client.configuration.talosConfig' | tee talosconfig
const talosExport = {
	// health: {
	// 	id: talosHealthCheck.id,
	// },
	client: {
		configuration: talosClientConfiguration,
	},
	machine: {
		configuration: talosMachineConfiguration,
	},
	kubernetes: {
		kubeconfig: talosKubeconfig.kubeconfigRaw,
	},
	// registries: {
	// 	"ghcr.io": {
	// 		username: "_token",
	// 		password: registryPasswordGithub,
	// 	},
	// },
};
export { talosExport as talos };
//#endregion Pulumi:Exports
