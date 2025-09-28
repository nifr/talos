declare type RegistryAuthConfig = {
	"ghcr.io": {
		password: string;
	};
};

declare type IpStackConfig = {
	org: string;
	project: string;
	stack: string;
};

// 1. Define a mapping between locations and datacenters
declare type HetznerLocationToDatacenter = {
	fsn1: "fsn1-dc14";
	nbg1: "nbg1-dc3";
	hel1: "hel1-dc2";
};

/**
 * Hetzner datacenter locations.
 *
 * command: `hcloud location list`
 * command: `hcloud location describe "${locationId}"`
 *
 * fsn1 - Falkenstein, Germany
 * nbg1 - Nuremberg, Germany
 * hel1 - Helsinki, Finland
 * [..]
 *
 * non EU locations are ignored for this project
 */
// declare const hetznerLocation: readonly ["fsn1", "nbg1", "hel1"];
// declare type HetznerLocation = (typeof hetznerLocation)[number];
declare type HetznerLocation = keyof HetznerLocationToDatacenter;

/**
 * Hetzner datacenters.
 *
 * command: `hcloud datacenter list`
 * command: `hcloud datacenter describe "${datacenterId}"`
 *
 * nbg1-dc3 - Nuremberg, Germany
 * fsn-dc14 - Falkenstein, Germany
 * hel-dc2  - Helsinki, Finland
 * [..]
 *
 * non EU datacenters are ignored for this project
 * non EU datacenter do not support ARM architecture servers (yet)
 */
// declare const hetznerDatacenter: readonly ["fsn1-dc14", "nbg1-dc3", "hel1-dc2"];
// declare type HetznerDatacenter = (typeof hetznerDatacenter)[number];
declare type HetznerDatacenter = HetznerLocationToDatacenter[HetznerLocation];

declare type HetznerDatacenterAtLocation<L extends HetznerLocation> =
	HetznerLocationToDatacenter[L];

/**
 * Hetzner server types.
 *
 * command: `hcloud server-type list`
 * command: `hcloud server-type describe "${serverTypeId}"`
 *
 * cax11 - arm, 2 vCPU, 4 GB RAM, 40 GB SSD
 * cax21 - arm, 4 vCPU, 8 GB RAM, 80 GB SSD
 * cax31 - arm, 8 vCPU, 16 GB RAM, 160 GB SSD
 * cax41 - arm, 16 vCPU, 32 GB RAM, 320 GB SSD
 *
 * [..] non ARM architecture server types are ignored for this project.
 */
declare const hetznerServerTypes: readonly ["cax11", "cax21", "cax31", "cax41"];
declare type HetznerServerType = (typeof hetznerServerTypes)[number];

declare type HetznerFloatingIpStackOutput = {
	id: number;
	name: string;
	ipAddress: string;
};

declare type HetznerStackOutput = {
	floatingIp: HetznerFloatingIpStackOutput;
};
