# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

## see: https://github.com/Azure/mcp-kubernetes

ARG debian_codename='trixie'
ARG base_image="docker.io/library/debian:${debian_codename}-slim"
FROM "${base_image}" AS base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG DEBIAN_FRONTEND='noninteractive'
RUN <<'INSTALL_DEPENDENCIES'
echo '=== update apt package lists ...'
apt-get update
echo '=== install required apt packages ...'
apt-get install \
  --yes \
  --no-install-recommends \
  --no-install-suggests \
    ca-certificates \
    curl \
    tar
echo '=== apt-get clean'
apt-get clean

echo '=== rm -rf /var/lib/apt/lists/*'
rm -rf /var/lib/apt/lists/*
INSTALL_DEPENDENCIES

FROM base AS mcp-kubernetes
ARG TARGETARCH

ARG mcp_kubernetes_version='0.0.9'
ARG mcp_kubernetes_architecture="${TARGETARCH}"
## example url: https://github.com/Azure/mcp-kubernetes/releases/download/v0.0.9/mcp-kubernetes-linux-arm64
ARG mcp_kubernetes_download_url="https://github.com/Azure/mcp-kubernetes/releases/download/v${mcp_kubernetes_version}/mcp-kubernetes-linux-${mcp_kubernetes_architecture}"

RUN \
<<'INSTALL_MCP_KUBERNETES'
echo '=== [mcp-kubernetes] download and install ...'
printf '=== [mcp-kubernetes] download url: %s\n' \
  "${mcp_kubernetes_download_url}"
curl \
  -sLo- \
    "${mcp_kubernetes_download_url}" \
| install \
    --owner='root' \
    --group='root' \
    --mode='755' \
      /dev/stdin \
      /usr/local/bin/mcp-kubernetes

echo '=== [mcp-kubernetes] print version'
mcp-kubernetes --version || true
echo '=== [mcp-kubernetes] installation complete.'
INSTALL_MCP_KUBERNETES
