import * as pulumi from "@pulumi/pulumi";
import * as hcloud from "@pulumi/hcloud";
import * as std from "@pulumi/std";

interface PulumiConfig {
  debug: boolean;
  access_token: pulumi.Output<string> | string;
}
const pulumiConfig = new pulumi.Config();
let config = {} as any;

const sshKey = new hcloud.SshKey("ssh-key", {
    name: "ssh-key",
    publicKey: std.file({
        input: "/run/secrets/ssh_public_key",
    }).then((invoke: any) => invoke.result),
});

const primaryIp1 = new hcloud.PrimaryIp("primary-ip-v4", {
    name: "talos-node-1-ip",
    datacenter: "nbg1-dc3",
    type: "ipv4",
    assigneeType: "server",
    autoDelete: false,
    labels: {
        name: "talos-node-1",
    },
});

// Create a new server running debian
const node1 = new hcloud.Server("server", {
    name: 'talos-node-1-server',
    image: 'debian-12',
    serverType: 'cax31',
    location: 'nbg1',
    sshKeys: [sshKey.id],
    publicNets: [{
        ipv4Enabled: true,
        ipv4: primaryIp1.id.apply(id => parseInt(id)),
        ipv6Enabled: false,
    }],
});

export const node = {
    id: node1.id,
    name: node1.name,
    ipv4Address: node1.ipv4Address,
    ipv6Address: node1.ipv6Address,
};