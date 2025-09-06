# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

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

# apt-cache policy 'docker-*' | grep '^[a-z]' | sed 's#:$##g'
#
# docker-compose-plugin
# docker-compose
# docker-ce-cli
# docker-buildx-plugin
# docker-doc
# docker-ce
# docker-ce-rootless-extras
# docker-clean
# docker-model-plugin
# docker-registry

ARG name='docker'
ARG build_context_mount_path='/mnt/build-context/docker'
ARG process_compose_config_target="/opt/process-compose/config/${name}.process-compose.yml"
## args used by docker-mcp build
ARG go_build_mount_path='/mnt/go-build'
ARG build_output
ARG binary_name
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
  --mount=from=go-build,target=${go_build_mount_path} \
<<'INSTALL_DOCKER'

echo "=== install /etc/apt/sources.list.d/${name}.sources"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
     {${build_context_mount_path},}/etc/apt/sources.list.d/${name}.sources

echo '=== apt-get update'
apt-get update

echo '=== apt-get install docker-ce'
## see: https://github.com/docker/cli/tags
## see: https://github.com/docker/compose/releases
## see: https://github.com/docker/mcp-gateway/tags
##
## [warning]
## note: the Debian apt repo packages are lacking behind the GitHub releases.
## i.e. as of 2025-07-24, the latest compose version is v2.39.0 (released 6 hours ago)
## but the latest docker-ce version is 28.3.2.
##
## [versions]
## e.g. docker-ce=5:28.3.2-1~debian.12~bookworm
## e.g. docker-ce-cli=5:28.3.2-1~debian.12~bookworm
## e.g. docker-buildx-plugin=0.25.0-1~debian.12~bookworm
## e.g. docker-compose-plugin=2.38.2-1~debian.12~bookworm
apt-get install \
-qq \
--no-install-recommends \
--no-install-suggests \
    docker-ce \
    docker-ce-cli \
    docker-buildx-plugin \
    docker-compose-plugin

echo '=== apt-get clean'
apt-get clean

echo '=== rm -rf /var/lib/apt/lists/*'
rm -rf /var/lib/apt/lists/*

echo '=== clean up'
rm -rf \
  /etc/docker \
  /etc/default/docker \
  /etc/init.d/docker \
  /lib/systemd/system/docker.socket \
  /lib/systemd/system/docker.service

## docker_home="/usr/libexec/docker"
## cli_plugins_dir="${docker_home}/cli-plugins"

printf '=== install "%s"\n' \
  ${binary_name} 
install \
  --owner='root' \
  --group='root' \
  --mode='755' \
     {${go_build_mount_path},}${build_output}

echo '=== use iptables-legacy if available'
if type iptables-legacy > /dev/null 2>&1; then
    update-alternatives --set iptables /usr/sbin/iptables-legacy
    update-alternatives --set ip6tables /usr/sbin/ip6tables-legacy
fi

declare -ra scripts=(
  '/usr/local/bin/service-docker-init'
  '/usr/local/bin/service-docker'
  '/usr/local/bin/docker-credential-gh'
)
for script in "${scripts[@]}"; do
  printf '=== install "%s"\n' \
    "${script}"
  install \
    --owner='root' \
    --group='root' \
    --mode='755' \
      {${build_context_mount_path},}${script}
done

install \
  --directory \
  --owner='root' \
  --group='docker' \
  --mode='2775' \
    /opt/docker/ \
    /opt/docker/cli/ \
    /opt/docker/daemon/

declare -ra config_files=(
  '/opt/docker/cli/config.json'
  '/opt/docker/daemon/daemon.json'
)

for config_file in "${config_files[@]}"; do
  printf '=== install "%s"\n' \
    "${config_file}"
  install \
    --owner='root' \
    --group='root' \
    --mode='770' \
      {${build_context_mount_path},}${config_file}
done

printf '=== install "%s"\n' \
  "${process_compose_config_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_config_target}

echo "=== Finished installing ${name}."

INSTALL_DOCKER

ARG PC_CONFIG_FILES="${PC_CONFIG_FILES:-}${PC_CONFIG_FILES:+,}${process_compose_config_target}"
ENV PC_CONFIG_FILES="${PC_CONFIG_FILES}"

ENV DOCKER_CONFIG="/opt/docker/cli"
ENV DOCKER_CLI_EXPERIMENTAL='enabled'
ENV DOCKER_SCAN_SUGGEST='false'
ENV DOCKER_BUILDKIT='1'
ENV BUILDKIT_PROGRESS='plain'
# used by compose
ENV COMPOSE_PROGRESS='plain'
ENV COMPOSE_BAKE='true'
# used by buildx
ENV BUILDX_NO_DEFAULT_ATTESTIONS='1'
ENV BUILDX_EXPERIMENTAL='1'


ARG _devcontainer_metadata="${_devcontainer_metadata:-[{\}]}"
ENV _devccontainer_metadata_to_add='[{ \
  "features": { \
    "ghcr.io/devcontainers/features/git:1": {} \
  }, \
  "customizations": { \
    "vscode": { \
      "extensions": [ \
        "ms-azuretools.vscode-containers", \
        "docker.docker" \
      ], \
      "settings": { \
\
        "containers.containers.description": [ \
            "Status" \
        ], \
        "containers.containers.label": "ContainerName", \
        "containers.containers.sortBy": "Label", \
        "containers.images.description": [ \
            "CreatedTime", \
            "Size" \
        ], \
        "containers.contexts.showInStatusBar": false, \
        "containers.images.label": "Tag", \
        "docker.containers.label": "ContainerName", \
        "docker.containers.description": [ \
            "Status" \
        ], \
        "docker.lsp.telemetry": "off", \
        "docker.lsp.experimental.vulnerabilityScanning": true \
\
      } \
    } \
  } \
}]'
ENV _devcontainer_metadata="${_devcontainer_metadata%\}]}    },    ${_devccontainer_metadata_to_add#[}"
ENV _devccontainer_metadata_to_add=
LABEL devcontainer.metadata="${_devcontainer_metadata}"

## unset common variables to not accidently reuse them in the build next stage
ARG name=
ARG build_context_mount_path=
ARG process_compose_config_target=
ARG go_build_mount_path=
ARG build_output=
ARG binary_name=
