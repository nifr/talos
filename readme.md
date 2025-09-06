Open this repository in a GitHub Codespace with a click on the badge below.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=1051278938&skip_quickstart=true&machine=standardLinux32gb&devcontainer_path=.devcontainer%2Ftalos%2Fdevcontainer.json&geo=EuropeWest)

## Build Order

```mermaid
graph TD
    A[debian] --> B[pkgx]
    B --> C[pkgx-packages]
    C --> D[s6-overlay]
    D --> E[process-compose]
    E --> F[docker]
    F --> G[devcontainer]
    G --> H[talos]
```

## Pulumi

```bash
bun install
pulumi login
pulumi up
pulumi stack output --json
pulumi destroy
```

## Hetzner Cloud

* Pulumi: [HCloud Provider](https://www.pulumi.com/registry/packages/hcloud/)
* https://github.com/apricote/hcloud-upload-image

## Woot? So much codez?

```bash
pkgx tokei --no-ignore-dot --hidden
```
