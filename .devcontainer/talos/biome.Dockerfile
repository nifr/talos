# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:trixie-slim'
FROM "${base_image}" AS base

FROM base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG TARGETARCH
ARG biome_version='2.2.4'
## example url: https://github.com/biomejs/biome/releases/download/%40biomejs%2Fbiome%402.2.4/biome-linux-arm64-musl
## example url: 'https://github.com/biomejs/biome/releases/download/%40biomejs%2Fbiome%402.2.4/biome-linux-arm64-musl'
ARG biome_download_url="https://github.com/biomejs/biome/releases/download/%40biomejs%2Fbiome%40${biome_version}/biome-linux-${TARGETARCH}-musl"
ARG biome_target_path="/usr/local/bin/biome"

RUN \
<<'INSTALL_BIOME'
echo '=== [biome] update apt package lists ...'
apt-get update
echo '=== [biome] install required apt packages ...'
apt-get install \
  --yes \
  --no-install-recommends \
  --no-install-suggests \
    ca-certificates \
    curl

echo '=== [biome] apt-get clean'
apt-get clean

printf '=== [biome] download and extract biome from url "%s"\n' \
  "${biome_download_url}"
curl -sLo- "${biome_download_url}" \
| install \
     --owner=root \
     --group=root \
     --mode=755 \
      /dev/stdin \
      "${biome_target_path}"

echo '=== [biome] print version'
biome version

echo '=== [biome] installation complete.'
INSTALL_BIOME

# ENV BIOME_CONFIG_PATH='/etc/xdg/biome/biome.jsonc'
ENV BIOME_BINARY="${biome_target_path}"

## @todo: add back "devcontainer.metadata" label