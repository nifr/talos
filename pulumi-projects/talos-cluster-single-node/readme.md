
## CJ Test Run

```bash
hcloud-upload-image-talos
# take note of image id

pulumi stack init "$(pulumi whoami)/talos-cluster/talos"

pulumi config set --path 'talos-cluster-single-node:["hcloud"]["image"]["id"]' "${hcloudImageId}"
```

Get VSCode Kubernetes extension to pick up the kubeconfig

```bash
install --directory --mode=2700 ~/.kube
env KUBECONFIG="${HOME}/.kube/config" talosctl kubeconfig --merge=true
```

## TLDR

```bash
pulumi stack init 'galawork-nfroehlich/talos-cluster-single-node/development'

# set config values for the stack reference to get the floating ip from
pulumi config set-all --path \
  --plaintext talos-cluster-single-node:ip.org=galawork-nfroehlich \
  --plaintext talos-cluster-single-node:ip.project=cloudflare \
  --plaintext talos-cluster-single-node:ip.stack=nifr-de

# set config secret(s) for the containerd registry ghcr.io
# required: Personal Access Token (classic) with scope "read:packages"
# see: https://github.com/settings/tokens
pulumi config set --path 'talos-cluster-single-node:["registries"]["ghcr.io"]["auth"]' --secret "$(echo -n "${GHCR_USERNAME:?}:${GHCR_TOKEN:?}" | base64)"

# test if the token is stored correctly, should output '<user>:<token>'
pulumi config get --path 'talos-cluster-single-node:["registries"]["ghcr.io"]["auth"]' | base64 --decode

# provision the stack
bunx pulumi up \
  --non-interactive \
  --yes \
  --fully-qualify-stack-names \
  --continue-on-error \
  --skip-preview  \
  --suppress-outputs \
  --suppress-permalink \
  --suppress-progress

# dump the talosconfig and kubeconfig to local files
# direnv will pick them up and set KUBECONFIG and TALOSCONFIG accordingly
pulumi stack output --show-secrets 'talosconfig' > talosconfig
pulumi stack output --show-secrets 'kubeconfig' > kubeconfig

# optional: symlink the config to it's default location
# note: this allows the VSCode kubernetes extension to pick it up
install --directory --mode=2770 ~/.kube/
ln -sfn $(realpath ./kubeconfig) ~/.kube/config

# open the dynamic ip port 80 / http in the browser
open "http://$(pulumi stack output --show-secrets --json | jq -r '.stackReference.dynamicIp.address')"
```

## TODO

* [x] set `machine.network.hostname`
* [x] set `machine.network.nameservers`
* [ ] set `machine.network.interfaces` to use routing
* [-] set `machine.registries."ghcr.io"`
  * see: https://kubito.dev/posts/talos-linux-additional-docker-registries/
* [ ] install [hcloud-cloud-controller-manager](https://github.com/hetznercloud/hcloud-cloud-controller-manager)
* [ ] install [talos-cloud-controller-manager](https://github.com/siderolabs/talos-cloud-controller-manager)
* [x] install [metallb](https://github.com/metallb/metallb)
  * see: https://metallb.io/installation/
  * see: https://notes.joshrnoll.com/notes/deploy-talos-linux-with-local-vip-tailscale-longhorn-metallb-and-traefik/
* [x] expose [containerd metrics](https://www.talos.dev/v1.10/talos-guides/configuration/containerd/#exposing-metrics)

## Tutorials

* see: https://datavirke.dk/posts/bare-metal-kubernetes-part-1-talos-on-hetzner/
* see: https://github.com/hcloud-talos/terraform-hcloud-talos/tree/main

## Pulumi Configuration

```
pulumi config set ip:org <your-pulumi-org>
pulumi config set ip:org galawork-nfroehlich
const org = config.require("ip.org") || "galawork-nfroehlich";

pulumi config set project <your-pulumi-project>
pulumi config set ip:project galawork-nfroehlich
const project = config.require("ip.project") || "cloudflare";

pulumi config set ip:stack galawork-nfroehlich
```

## Talos Secrets

A Pulumi Talos secrets resource consists of 3 Parts

* Talos Version
* Client Secrets
  * The client CA certificate (`caCertificate: string;`)
  * The client certificate (`clientCertificate: string;`)
  * The client privte key (`clientKey: string;`)
* Machine Secrets
  * certs: outputs.machine.Certificates;
  * cluster: outputs.machine.Cluster;
  * secrets: outputs.machine.KubernetesSecrets;
  * trustdinfo: outputs.machine.TrustdInfo; -> token: string;

## Talos Machine Naming

👉 `talos-node-0` for dual-role nodes
👉 `talos-controlplane-0` for control plane only
👉 `talos-worker-0` for worker only

Use `hostname --fqdn` to show the full hostname (including domain).

## talosctl CLI

Set `TALOSCONFIG` to the path of your `talosconfig` file or use `talosctl --config [.]/path/to/talosconfig`.

The following commands can be used to **edit** endpoints and nodes in `talosconfig`:

```bash
# updates .contexts.${clusterName}.endpoints key in `talosconfig`
talosctl config endpoints "${loadbalancerOrControlplaneIp}"

# updates .contexts.${clusterName}.nodes key in `talosconfig`
talosctl config node "${controlplaneIp}"

# show current configuration - current context, nodes, endpoints and certificate expiry date
talosctl config info
```

<details>
<summary>Example: talosctl</summary>

```yaml
context: cluster-name
contexts:
    cluster-name:
        endpoints:
            # updated with `talosctl config endpoint "${endpointIp}"`
            - 91.99.103.129
        nodes:
           # updated with `talosctl config node ${nodeIp1} ${nodeIp2}`
            - 91.99.103.129
        ca: xxx
        crt: xxx
        key: xxx
```

</details>

Print dmesg (kernel boot logs)

```bash
talosctl dmesg
```

Show the dashboard

```bash
talosct --endpoints "${nodeIP}" --nodes "${nodeIp}" dashboard
talosctl -e "${nodeIp}" -n "${nodeIp}" dashboard
```

Show disks and network interfaces

```bash
# show network interfaces
talosctl get links

# show disks
talosctl get disks

# show pcidevices
talosctl get pcidevices

# show running containers
talosctl containers

# show running processes
talosctl processes

# show `docker top` like stats
talosctl stats

# [containerd]
# show custom configuration
talosctl read /etc/cri/conf.d/20-customization.part

# [network]
# show network interfaces, address and link
talosctl get addresses

# show node network addresses (routes, k8s, ...)
talosctl get nodeaddresses

# show netstat-like information
talosctl netstat -n $NODE

# show live network traffic
talosctl pcap

# [DNS]
# show resolv config
talosctl read /etc/resolv.conf

# show configured nameservers
talosctl get resolvers

# show dns upstream resources (nameservers and health status)
talosctl get dnsupstream
```

Show the cluster members as seen from each node:

```bash
talosctl get members
```

Run a health check for a control plane node (can not be run against multiple nodes)

```bash
talosctl health --nodes "${controlplaneIp}" --control-plane-nodes "${controlplaneIp}"
```

## Talos Patches

* see: https://www.talos.dev/latest/talos-guides/configuration/patching/

## Pulumi - ESC Secrets

* see: https://www.pulumi.com/docs/esc/environments/working-with-environments/#projecting-pulumi-config

## Pulumi - Talos Provider

* see: https://www.pulumi.com/registry/packages/talos/

## GitHub Container Registry (ghcr.io) Configuration

This cluster is configured with pull secrets for GitHub Container Registry. To use private images from ghcr.io:

### Prerequisites

1. **GitHub Personal Access Token**: Create a classic Personal Access Token with `read:packages` scope
   - Go to: https://github.com/settings/tokens
   - Generate new token (classic)
   - Select `read:packages` scope

2. **Set Environment Variables**: Before deploying, set these environment variables:

```bash
# Your GitHub username and token (base64 encoded)
export GITHUB_REGISTRY_AUTH=$(echo -n "your-username:ghp_xxxxxxxxxxxx" | base64)

# Docker config JSON (base64 encoded)
export GITHUB_DOCKER_CONFIG_JSON=$(echo -n '{"auths":{"ghcr.io":{"username":"your-username","password":"ghp_xxxxxxxxxxxx","auth":"'$(echo -n "your-username:ghp_xxxxxxxxxxxx" | base64)'"}}}' | base64)
```

### Usage

Once configured, you can pull private images from ghcr.io in your Kubernetes manifests:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
      - name: app
        image: ghcr.io/your-org/your-private-image:latest
      # imagePullSecrets are automatically configured for default service accounts
```

### Manual Secret Creation (Alternative)

If you prefer to manage secrets manually:

```bash
# Create the secret in any namespace
kubectl create secret docker-registry ghcr-pull-secret \
  --docker-server=ghcr.io \
  --docker-username=your-username \
  --docker-password=ghp_xxxxxxxxxxxx \
  --namespace=your-namespace

# Add to service account
kubectl patch serviceaccount default \
  -p '{"imagePullSecrets": [{"name": "ghcr-pull-secret"}]}' \
  --namespace=your-namespace
```

## Talos -  Single-Node Patches

* see: https://www.talos.dev/v1.11/talos-guides/howto/workers-on-controlplane/

```yaml
cluster:
    allowSchedulingOnControlPlanes: true
machine:
  nodeLabels:
    node.kubernetes.io/exclude-from-external-load-balancers:
      $patch: delete
```

This IP is FUCKED. No network connection. New IP, no more trouble.

```
167.235.53.249
```

## Destroy a single resource

```bash
# get the urn of the resource
pulumi stack --show-urns

pulumi destroy --target="${resourceUrn:?}" --target-dependents
```

## Floating IP

```typescript

/**
 * Get Floating IP from Pulumi Stack
 */
//#region Floating IP
const ipStack = config.requireObject<IpStackConfig>("ip");

const floatingIpStackRef = new pulumi.StackReference(
	`${ipStack.org}/${ipStack.project}/${ipStack.stack}`,
);

const floatingIpId = floatingIpStackRef
	.getOutput("hetzner")
	.apply((output: HetznerStackOutput) => output.floatingIp.id);

const floatingIpAddress = floatingIpStackRef
	.getOutput("hetzner")
	.apply((output: HetznerStackOutput) => output.floatingIp.ipAddress);
//#endregion Floating IP

// [..] - create the HCloud Server

/**
 * Assign Floating IP
 */
const serverFloatingIpAssignment = new hcloudProvider.FloatingIpAssignment(
	"hcloud-floating-ip-assignment-to-server",
	{
		floatingIpId: floatingIpId,
		serverId: server.id.apply((id) => Number.parseInt(id, 10)),
	},
	{
		parent: server,
		dependsOn: [server, floatingIpStackRef],
	},
);
```

## Talos - Apply Configuration

```typescript
const talosConfigurationApply = new talosProvider.machine.ConfigurationApply(
	"talos-cluster-bootstrap-apply-configuration",
	{
		clientConfiguration: talosSecrets.clientConfiguration,
		machineConfigurationInput: talosMachineConfiguration.apply(
			(config) => config.machineConfiguration,
		),
		endpoint: serverIp.ipAddress,
		node: serverIp.ipAddress,
	},
);
```
