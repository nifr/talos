import * as path from "node:path";
import { local as localCommand } from "@pulumi/command";
import * as hcloud from "@pulumi/hcloud";
import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";

/**
 * This Pulumi program is based on the Hetzner tutorial from the official Talos documentation:
 * see: https://www.talos.dev/v1.11/talos-guides/install/cloud-platforms/hetzner/#hcloud-upload-image
 *
 * You can generate personal access tokens for Pulumi from the Pulumi Console:
 * https://app.pulumi.com/user/settings/tokens
 *
 * To see your stacks go here:
 * see: https://app.pulumi.com/${PULUMI_USERNAME}/projects
 */

// interface PulumiConfig {
// 	debug: boolean;
// 	access_token: pulumi.Output<string> | string;
// }
// const pulumiConfig = new pulumi.Config();
// const config = {} as any;

/**
 * Cluster name used in the Talos configuration files and in the generated kubeconfig context
 */
const clusterName = "talos-cluster-hetzner-0";

/**
 * Hetzner location where all servers will be created.
 * see: `hcloud location list` or run `./bin/hcloud-location`
 */
const location = "nbg1";

/**
 * Hetzner datacenter where primary IPs (v4) for controlplane and worker will be created.
 */
const datacenter = "nbg1-dc3";

/**
 * This is the Talos image ID on Hetzner Cloud.
 * The Talos image must be uploaded to Hetzner Cloud with the command `hcloud-upload-image` first.
 *
 * see: https://www.talos.dev/v1.11/talos-guides/install/cloud-platforms/hetzner/#hcloud-upload-image
 *
 * Use `hcloud image list` to see the available images.
 * A convenience script `./bin/hcloud-image` exists in the `./bin` folder.
 *
 * @todo provide image id directly from a local command resource
 * A convenience script `./bin/hcloud-upload-image-talos` exists in the `./bin` folder.
 */
const serverImageId = "316900484";

/**
 * Common server configuration for controlplane and worker nodes
 *
 * Example resulting Kubernetes node labels:
 *
 *   beta.kubernetes.io/arch=arm64
 *   instance.hetzner.cloud/provided-by=cloud
 *   kubernetes.io/arch=arm64
 *   kubernetes.io/hostname=talos-controlplane
 *   kubernetes.io/os=linux
 *   node-role.kubernetes.io/control-plane=
 *   node.kubernetes.io/instance-type=cax11
 *   topology.kubernetes.io/region=nbg1
 *   topology.kubernetes.io/zone=nbg1-dc3
 */
const serverConfig = {
	image: serverImageId,
	location: location,
	// publicNets: [
	// 	{
	// 		ipv4Enabled: true,
	// 		ipv6Enabled: false,
	// 	},
	// ],
};

/**
 * [loadbalancer]
 * Create a loadbalancer for the API server on the controlplane nodes.
 * A "lb11" type loadbalancer on Hetzner costs 5,90 EUR per month.
 * see: https://www.hetzner.com/cloud/load-balancer/
 *
 * "hcloud" CLI command equivalent:
 *
 * hcloud load-balancer create \
 *   --name controlplane \
 *   --network-zone eu-central \
 *   --type lb11 \
 *   --label 'type=controlplane'
 */
const loadBalancer = new hcloud.LoadBalancer(
	"talos-loadbalancer-controlplane-api",
	{
		name: "talos-loadbalancer-controlplane-api",
		loadBalancerType: "lb11",
		location: location,
		labels: {
			type: "controlplane",
		},
	},
);

/**
 * [loadbalancer:target]
 * "hcloud" CLI command equivalent:
 *
 * hcloud load-balancer add-target \
 *   controlplane \
 *     --label-selector 'type=controlplane'
 */
const loadBalancerTarget = new hcloud.LoadBalancerTarget(
	"talos-loadbalancer-controlplane-api-target-by-labelselector",
	{
		type: "label_selector",
		loadBalancerId: loadBalancer.id.apply((id) => Number.parseInt(id, 10)),
		labelSelector: "type=controlplane",
	},
	{
		parent: loadBalancer,
	},
);

/**
 * [loadbalancer:service]
 * Create the load balancer service for the Talos API server on port 6443.
 *
 * "hcloud" CLI command equivalent:
 *
 * hcloud load-balancer add-service \
 *   controlplane \
 *     --listen-port 6443 \
 *     --destination-port 6443 \
 *     --protocol tcp
 *
 */
const loadBalancerService = new hcloud.LoadBalancerService(
	"talos-loadbalancer-controlplane-api-service-tcp-6443",
	{
		loadBalancerId: loadBalancer.id,
		protocol: "tcp",
		destinationPort: 6443,
		listenPort: 6443,
	},
	{
		parent: loadBalancer,
	},
);

/**
 * Talos command to generate the Talos configuration files:
 * - "controlplane.yaml"
 * - "worker.yaml"
 * - "talosconfig"
 *
 * This can be done with the Pulumi Talos provider as well.
 * For simplicity we use the local command provider here.
 * see: https://www.pulumi.com/registry/packages/talos/
 */
const talosctlGenConfigCommand = new localCommand.Command(
	"talosctl-command-gen-config",
	{
		dir: __dirname,
		logging: "none",
		assetPaths: ["controlplane.yaml", "worker.yaml", "talosconfig"],
		create: pulumi.interpolate`talosctl gen config ${clusterName} https://${loadBalancer.ipv4}:6443 --with-examples=false --with-docs=false`,
		delete: "rm controlplane.yaml worker.yaml talosconfig",
		update: "true",
	},
	{ dependsOn: [loadBalancer, loadBalancerService] },
);

const controlplaneConfigCommand = new localCommand.Command(
	"talos-config-file-controlplane",
	{
		logging: "none",
		create: `cat ${path.join(__dirname, "/controlplane.yaml")}`,
	},
	{
		parent: talosctlGenConfigCommand,
		dependsOn: [talosctlGenConfigCommand],
	},
);

//const controlPlaneConfig = local.getFileOutput({filename: `${path.join(__dirname, '/controlplane.yaml')}`}, {async: false, dependsOn: [talosConfig]})

const controlplaneIp = new hcloud.PrimaryIp("talos-ipv4-controlplane-0", {
	name: "talos-ipv4-controlplane-0",
	datacenter: datacenter,
	type: "ipv4",
	assigneeType: "server",
	autoDelete: false,
	labels: {
		type: "controlplane",
	},
});

/**
 * Create the Hetzner Cloud server(s) for our Talos cluster controlplane node(s)
 */
const controlplaneServer = new hcloud.Server(
	"talos-server-controlplane-0",
	{
		...serverConfig,
		name: "talos-server-controlplane-0",
		serverType: "cax11",
		publicNets: [
			{
				ipv4Enabled: true,
				ipv4: controlplaneIp.id.apply((id) => Number.parseInt(id, 10)),
				ipv6Enabled: false,
			},
		],
		userData: controlplaneConfigCommand.stdout,
		labels: {
			type: "controlplane",
		},
	},
	{
		parent: controlplaneConfigCommand,
		dependsOn: [
			talosctlGenConfigCommand,
			controlplaneConfigCommand,
			loadBalancer,
			loadBalancerService,
		],
	},
);

/**
 * Read the worker configuration file "worker.yaml"
 * The file or more precise it's content is used in the worker server resource definition
 * See key "userData" in the worker node resource.
 */
const workerConfigCommand = new localCommand.Command(
	"talos-config-file-worker",
	{
		logging: "none",
		create: `cat ${path.join(__dirname, "/worker.yaml")}`,
	},
	{
		parent: talosctlGenConfigCommand,
		dependsOn: [talosctlGenConfigCommand],
	},
);

/**
 * Create a IP (v4) primary IP for the worker node/server
 */
const workerIp = new hcloud.PrimaryIp("talos-ipv4-worker-0", {
	name: "talos-ipv4-worker-0",
	datacenter: datacenter,
	type: "ipv4",
	assigneeType: "server",
	autoDelete: false,
	labels: {
		type: "worker",
	},
});

/**
 * Create a firewall for the worker(s) allowing HTTP (80) and HTTPS (443) traffic.
 */
const workerFirewall = new hcloud.Firewall("talos-firewall-worker-0", {
	name: "talos-firewall-worker-0",
	rules: [
		{
			direction: "in",
			protocol: "tcp",
			port: "80",
			sourceIps: [
				"0.0.0.0/0",
				// "::/0"
			],
		},
		{
			direction: "out",
			protocol: "tcp",
			port: "80",
			sourceIps: ["0.0.0.0/0"],
		},
		{
			direction: "in",
			protocol: "tcp",
			port: "443",
			sourceIps: ["0.0.0.0/0"],
		},
		{
			direction: "out",
			protocol: "tcp",
			port: "443",
			sourceIps: ["0.0.0.0/0"],
		},
	],
});

/**
 * Create the server(s) that will be our Talos cluster worker node(s)
 */
const worker = new hcloud.Server(
	"talos-server-worker-0",
	{
		...serverConfig,
		name: "talos-worker",
		serverType: "cax11",
		userData: workerConfigCommand.stdout,
		firewallIds: [workerFirewall.id.apply((id) => Number.parseInt(id, 10))],
		publicNets: [
			{
				ipv4Enabled: true,
				ipv4: workerIp.id.apply((id) => Number.parseInt(id, 10)),
				ipv6Enabled: false,
			},
		],
		labels: {
			type: "worker",
		},
	},
	{
		parent: workerConfigCommand,
		dependsOn: [
			talosctlGenConfigCommand,
			workerConfigCommand,
			loadBalancer,
			loadBalancerService,
		],
	},
);

// talosctl --talosconfig talosconfig config endpoint <control-plane-1-IP>
const talosctlConfigEndpointCommand = new localCommand.Command(
	"talosctl-command-config-endpoint",
	{
		logging: "none",
		environment: {
			TALOSCONFIG: path.join(__dirname, "talosconfig"),
		},
		create: pulumi.interpolate`talosctl config endpoint ${controlplaneServer.ipv4Address}`,
	},
	{
		parent: talosctlGenConfigCommand,
		dependsOn: [talosctlGenConfigCommand, controlplaneServer],
	},
);

// talosctl --talosconfig talosconfig config node <control-plane-1-IP>
const talosctlConfigNodeCommand = new localCommand.Command(
	"talosctl-command-config-node",
	{
		logging: "none",
		environment: {
			TALOSCONFIG: path.join(__dirname, "talosconfig"),
		},
		create: pulumi.interpolate`talosctl config node ${controlplaneServer.ipv4Address}`,
	},
	{
		parent: talosctlGenConfigCommand,
		dependsOn: [talosctlGenConfigCommand, controlplaneServer],
	},
);

// talosctl --talosconfig talosconfig bootstrap
const talosctlBootstrapCommand = new localCommand.Command(
	"talosctl-command-bootstrap",
	{
		logging: "none",
		environment: {
			TALOSCONFIG: path.join(__dirname, "talosconfig"),
		},
		create: pulumi.interpolate`talosctl bootstrap`,
	},
	{
		parent: talosctlGenConfigCommand,
		dependsOn: [
			talosctlGenConfigCommand,
			talosctlConfigEndpointCommand,
			talosctlConfigNodeCommand,
		],
	},
);

/**
 * At this point our Talos cluster is running and we are able to get the talos members with:
 *
 * `talosctl --talosconfig talosconfig -n $(pulumi stack output --json | jq '.cluster.controlPlane.ipv4')`
 */
const talosctlKubeconfigCommand = new localCommand.Command(
	"talosctl-command-kubeconfig",
	{
		logging: "none",
		environment: {
			TALOSCONFIG: path.join(__dirname, "talosconfig"),
		},
		create: pulumi.interpolate`talosctl kubeconfig ${__dirname}`,
		update: "true",
		delete: `rm ${path.join(__dirname, "kubeconfig")}`,
	},
	{
		parent: talosctlBootstrapCommand,
		dependsOn: [talosctlGenConfigCommand, talosctlBootstrapCommand],
	},
);

/**
 *  talosctl --talosconfig talosconfig patch machineconfig --patch-file patch.yaml --nodes <comma separated list of all your nodes' IP addresses>
 */
// biome-ignore lint/correctness/noUnusedVariables: this is a one-off command resource
const talosctlPatchEnableExternalCloudproviderCommand =
	new localCommand.Command(
		"talosctl-command-patch-machineconfig-enable-external-cloud-provider",
		{
			logging: "none",
			environment: {
				TALOSCONFIG: path.join(__dirname, "talosconfig"),
			},
			create: pulumi.interpolate`talosctl patch machineconfig --patch-file ${path.join(__dirname, "talos-patch.yaml.d", "external-cloud-provider.talos-patch.yaml")} --nodes ${controlplaneServer.ipv4Address},${worker.ipv4Address}`,
		},
		{
			parent: talosctlKubeconfigCommand,
			dependsOn: [talosctlKubeconfigCommand],
		},
	);

// biome-ignore lint/correctness/noUnusedVariables: this is a one-off command resource
const talosctlPatchApiserverNodeportRangeCommand = new localCommand.Command(
	"talosctl-command-patch-machineconfig-apiserver-nodeport-range",
	{
		logging: "none",
		environment: {
			TALOSCONFIG: path.join(__dirname, "talosconfig"),
		},
		create: pulumi.interpolate`talosctl patch machineconfig --patch-file ${path.join(__dirname, "talos-patch.yaml.d", "apiserver-nodeport-range.talos-patch.yaml")} --nodes ${controlplaneServer.ipv4Address},${worker.ipv4Address}`,
	},
	{
		parent: talosctlKubeconfigCommand,
		dependsOn: [talosctlKubeconfigCommand],
	},
);

// biome-ignore lint/correctness/noUnusedVariables: this is a one-off command resource
const talosctlPatchApiserverAdmissioncontrolCommand = new localCommand.Command(
	"talosctl-command-patch-machineconfig-apiserver-admissioncontrol",
	{
		logging: "none",
		environment: {
			TALOSCONFIG: path.join(__dirname, "talosconfig"),
		},
		create: pulumi.interpolate`talosctl patch machineconfig --patch-file ${path.join(__dirname, "talos-patch.yaml.d", "apiserver-adminissioncontrol.talos-patch.yaml")} --nodes ${controlplaneServer.ipv4Address},${worker.ipv4Address}`,
	},
	{
		parent: talosctlKubeconfigCommand,
		dependsOn: [talosctlKubeconfigCommand],
	},
);

const talosconfigReadCommand = new localCommand.Command(
	"talos-config-file-talosconfig",
	{
		logging: "none",
		create: `cat ${path.join(__dirname, "/talosconfig")}`,
		update: undefined,
		delete: undefined,
	},
	{
		parent: talosctlBootstrapCommand,
		dependsOn: [talosctlConfigNodeCommand],
	},
);

const kubeconfigReadCommand = new localCommand.Command(
	"talos-config-file-kubeconfig",
	{
		logging: "none",
		create: `cat ${path.join(__dirname, "/kubeconfig")}`,
		update: undefined,
		delete: undefined,
	},
	{
		parent: talosctlBootstrapCommand,
		dependsOn: [talosctlConfigNodeCommand],
	},
);

const talosControlplaneConfigReadCommand = new localCommand.Command(
	"talos-config-file-controlplane-yaml",
	{
		logging: "none",
		create: `cat ${path.join(__dirname, "/controlplane.yaml")}`,
		update: undefined,
		delete: undefined,
	},
	{
		parent: talosctlKubeconfigCommand,
		dependsOn: [talosctlKubeconfigCommand],
	},
);

const talosWorkerConfigReadCommand = new localCommand.Command(
	"talos-config-file-worker-yaml",
	{
		logging: "none",
		create: `cat ${path.join(__dirname, "/worker.yaml")}`,
		update: undefined,
		delete: undefined,
	},
	{
		parent: talosctlKubeconfigCommand,
		dependsOn: [talosctlKubeconfigCommand],
	},
);

/**
 * Set up the Pulumi Kubernetes provider using the generated kubeconfig.
 */
const k8sProvider = new k8s.Provider(
	"talos-cluster-pulumi-k8s-provider",
	{
		kubeconfig: kubeconfigReadCommand.stdout,
	},
	{
		dependsOn: [talosctlKubeconfigCommand],
	},
);

/**
 * [helm:hetzner-cloud-controller-manager]
 * see: see: https://github.com/hetznercloud/hcloud-cloud-controller-manager/blob/main/docs/guides/quickstart.md
 *
 * export KUBECONFIG=$(realpath kubeconfig)
 * kubectl -n kube-system create secret generic hcloud --from-literal="token=${HCLOUD_TOKEN:?}"
 */
const hetznerCloudApiTokenSecret = new k8s.core.v1.Secret(
	"hcloud-cloud-controller-manager-secret",
	{
		metadata: {
			name: "hcloud",
			namespace: "kube-system",
		},
		stringData: {
			token: pulumi.secret(process.env.HCLOUD_TOKEN || ""),
		},
	},
	{
		provider: k8sProvider,
		dependsOn: [talosctlKubeconfigCommand],
	},
);

/**
 * Install the Hetzner Cloud Controller Manager via Helm chart.
 *
 * helm repo add hcloud https://charts.hetzner.cloud
 * helm repo update hcloud
 * helm search repo hcloud/hcloud-cloud-controller-manager --versions
 * helm install hccm hcloud/hcloud-cloud-controller-manager -n kube-system
 *
 * verify installation command(s):
 * helm list -n kube-system
 */
const _hetznerCloudControllerManager = new k8s.helm.v3.Chart(
	"hetzner-cloud-controller-manager",
	{
		chart: "hcloud-cloud-controller-manager",
		/**
		 * see:
		 * helm search repo hcloud/hcloud-cloud-controller-manager --versions
		 */
		version: "1.26.0",
		fetchOpts: {
			repo: "https://charts.hetzner.cloud",
		},
		namespace: "kube-system",
		values: {},
	},
	{
		provider: k8sProvider,
		dependsOn: [hetznerCloudApiTokenSecret],
	},
);

/**
 * [helm:traefik]
 * see: https://github.com/traefik/traefik-helm-chart?tab=readme-ov-file#with-additional-crds-chart
 *
 * helm repo add traefik https://traefik.github.io/charts
 * helm install traefik-crds oci://ghcr.io/traefik/helm/traefik-crds
 * helm install traefik oci://ghcr.io/traefik/helm/traefik --skip-crds
 */

/**
 * [pulumi:outputs]
 * The exports from this file are accessible via the Pulumi CLI and Pulumi SDKs.
 * see: https://www.pulumi.com/docs/intro/concepts/resources/outputs/
 *
 * Example(s):
 * pulumi stack output --json
 * pulumi stack output --json  | jq '.cluster.controlPlane.ipv4'
 */
export const cluster = {
	controlPlane: {
		id: controlplaneServer.id,
		name: controlplaneServer.name,
		ipv4: controlplaneServer.ipv4Address,
		ipv6: controlplaneServer.ipv6Address,
	},
	worker: {
		id: worker.id,
		name: controlplaneServer.name,
		ipv4: controlplaneServer.ipv4Address,
		ipv6: controlplaneServer.ipv6Address,
	},
	loadBalancer: {
		id: loadBalancer.id,
		name: loadBalancer.name,
		ipv4: loadBalancer.ipv4,
		ipv6: loadBalancer.ipv6,
		service: {
			id: loadBalancerService.id,
		},
		target: {
			id: loadBalancerTarget.id,
		},
	},
	loadBalancerService: {
		id: loadBalancer.id,
		name: loadBalancer.name,
	},
	config: {
		talosconfig: pulumi.secret(talosconfigReadCommand.stdout),
		kubeconfig: pulumi.secret(kubeconfigReadCommand.stdout),
		controlPlane: pulumi.secret(talosControlplaneConfigReadCommand.stdout),
		worker: pulumi.secret(talosWorkerConfigReadCommand.stdout),
	},
	secrets: {
		HCLOUD_TOKEN: {
			value: pulumi.secret(process.env.HCLOUD_TOKEN || ""),
		},
	},
};
