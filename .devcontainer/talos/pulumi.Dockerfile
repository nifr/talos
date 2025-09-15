# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=false

ARG debian_codename='trixie'
ARG base_image="docker.io/library/debian:${debian_codename}-slim"
FROM "${base_image}" AS base

FROM base

FROM base AS pulumi
ARG TARGETARCH
## see https://github.com/pulumi/pulumi/releases
# renovate: datasource=github-releases depName=pulumi packageName=pulumi/pulumi
ARG pulumi_version='3.193.0'

ARG pulumi_architecture="${TARGETARCH}"
ARG pulumi_architecture="${pulumi_architecture/amd64/x64}"
## example url: https://github.com/pulumi/pulumi/releases/download/v3.196.0/pulumi-v3.196.0-linux-x64.tar.gz
ARG pulumi_download_url="https://github.com/pulumi/pulumi/releases/download/v${pulumi_version}/pulumi-v${pulumi_version}-linux-${pulumi_architecture}.tar.gz"

RUN \
<<'INSTALL_PULUMI'
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

echo '=== [pulumi] create download target folder /opt/pulumi/bin ...'
install \
  --directory \
  /opt/pulumi \
  /opt/pulumi/bin/

printf '=== [pulumi] download and extract pulumi from url "%s"\n' \
  "${pulumi_download_url}"
curl -sLo- "${pulumi_download_url}" \
| \
  tar -xz --strip-components=1 -C /opt/pulumi \
    pulumi/pulumi \
    pulumi/pulumi-watch \
    pulumi/pulumi-analyzer-policy \
    pulumi/pulumi-language-nodejs \
    pulumi/pulumi-resource-pulumi-nodejs
INSTALL_PULUMI

FROM base AS final
COPY \
  --from=pulumi \
  --chown=root:root \
  --chmod=755 \
  /opt/pulumi/pulumi \
  /opt/pulumi/pulumi-watch \
  /opt/pulumi/pulumi-analyzer-policy \
  /opt/pulumi/pulumi-language-nodejs \
  /opt/pulumi/pulumi-resource-pulumi-nodejs \
  /usr/local/bin/

ENV PULUMI_COPILOT='true'
ENV PULUMI_EXPERIMENTAL='true'
ENV PULUMI_SKIP_UPDATE_CHECK='true'

## @todo: add back "devcontainer.metadata" label
