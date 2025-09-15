# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG debian_codename='trixie'
ARG base_image="docker.io/library/debian:${debian_codename}-slim"

## build version
ARG go_build_version='1.25.1'
ARG build_image="docker.io/library/golang:${go_build_version}-${debian_codename}"

# renovate: datasource=github-releases depName=toolbox packageName=googleapis/genai-toolbox
ARG toolbox_version='0.14.0'
ARG toolbox_go_package="github.com/googleapis/genai-toolbox@v${toolbox_version}"
ARG build_prefix='/opt/go'
ARG binary_name='genai-toolbox'
ARG binary_target_name='mcp-toolbox'
ARG version_flag='--version'

FROM build-context

FROM "${base_image}" AS base
FROM base

FROM "${build_image}" AS builder
FROM builder AS build-arm64
ARG build_prefix
ARG toolbox_go_package
ARG GO111MODULE='auto'
ARG GOPATH="${build_prefix}"
ARG GOBIN="${GOPATH}/bin"
ARG GOCACHE="${GOPATH}/cache"
ARG GOMODCACHE="${GOPATH}/pkg/mod"
RUN \
  --mount=type=cache,target=${GOCACHE} \
  --mount=type=cache,target=${GOMODCACHE} \
<<'BUILD_BINARY'
go install "${toolbox_go_package}"
BUILD_BINARY

FROM base AS build-amd64

## see:   https://github.com/googleapis/genai-toolbox/releases
## usage: toolbox --tools-file "tools.yaml" --log-level warn --logging-format json -p {SERVER_PORT} [--disable-reload]
ARG TARGETARCH
ARG toolbox_version
ARG build_prefix
ARG binary_name
## example url: https://storage.googleapis.com/genai-toolbox/v0.14.0/linux/arm64/toolbox
## note:        NO official linux/arm64 builds available as of v0.4.0 / 2025-09-10
ARG toolbox_download_url="https://storage.googleapis.com/genai-toolbox/v${toolbox_version}/linux/${TARGETARCH}/toolbox"
ADD \
  --chown=root:root \
  --chmod=755 \
    "${toolbox_download_url}" \
    "${build_prefix}/bin/${binary_name}"

FROM build-${TARGETARCH} AS binary

FROM base AS final
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG build_prefix
ARG build_mount_target='/mnt/build/toolbox'
ARG build_context_mount_path='/mnt/build-context/mcp-toolbox'
ARG process_compose_config_target='/opt/process-compose/config/mcp-toolbox.process-compose.yml'
ARG binary_name
ARG binary_target_name
ARG build_mount_target
ARG version_flag
RUN \
  --mount=from=binary,source=${build_prefix},target=${build_mount_target},readonly \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'INSTALL_TOOLBOX'
echo '=== [toolbox] install toolbox binary'
install \
  --owner='root' \
  --group='root' \
  --mode=755 \
    "${build_mount_target}/bin/${binary_name}" \
    "/usr/local/bin/${binary_target_name}"

echo '=== [toolbox] verify toolbox installation'
${binary_target_name} ${version_flag}

echo '=== [toolbox] ensure tools.yaml configuration folder exists'
install \
  --directory \
  --owner='root' \
  --group='root' \
  --mode='777' \
    /opt/mcp-toolbox/ \
    /opt/mcp-toolbox/tools.yaml.d/

echo '=== [toolbox] install default tools.yaml configuration'
install \
  --owner='root' \
  --group='root' \
  --mode='777' \
    {${build_context_mount_path},}/opt/mcp-toolbox/tools.yaml.d/tools.yaml

printf '=== install folder "%s"\n' \
  '/opt/process-compose/config/'
install \
  --directory \
  --owner='root' \
  --group='root' \
  --mode='755' \
    /opt/ \
    /opt/process-compose/ \
    /opt/process-compose/config/

printf '=== [toolbox] install process-compose configuration "%s"\n' \
  "${process_compose_config_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_config_target}
INSTALL_TOOLBOX

ARG PC_CONFIG_FILES="${PC_CONFIG_FILES:-}${PC_CONFIG_FILES:+,}${process_compose_config_target}"
ENV PC_CONFIG_FILES="${PC_CONFIG_FILES}"

