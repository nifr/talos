ARG binary_name='docker-mcp'
ARG build_output="/usr/libexec/docker/cli-plugins/docker-mcp"
ARG go_version='1.24.5'
ARG build_from='./cmd/docker-mcp'

ARG base_image='docker.io/library/debian:13-slim'
FROM "${base_image}" AS base

FROM build-context
FROM source-code

FROM base AS go-build
ARG build_output
ARG binary_name
ARG go_version
ARG build_from
ARG GO_LDFLAGS
RUN \
  --mount=from=source-code,target=/workspace \
<<'BUILD_BINARY'
echo '=== apt-get install build-essential'
apt-get update
apt-get install -qq build-essential
echo "=== build ${binary_name}"
cd /workspace
mkdir -p "$(dirname "${build_output}")"
pkgx +go.dev@${go_version} go build -trimpath -ldflags "-s -w ${GO_LDFLAGS:-}" -o "${build_output}" "${build_from}"
echo "=== finished building ${binary_name}"
BUILD_BINARY

FROM base

## args used by docker-mcp build
ARG go_build_mount_path='/mnt/go-build'
ARG build_output
ARG binary_name

RUN \
  --mount=from=go-build,target=${go_build_mount_path} \
<<'INSTALL_DOCKER_MCP_PLUGIN'

## docker_home="/usr/libexec/docker"
## cli_plugins_dir="${docker_home}/cli-plugins"

printf '=== install "%s"\n' \
  ${binary_name} 
install \
  --owner='root' \
  --group='root' \
  --mode='755' \
     {${go_build_mount_path},}${build_output}

INSTALL_DOCKER_MCP_PLUGIN