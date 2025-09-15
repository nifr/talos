# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:trixie-slim'
FROM build-context
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

FROM base AS final

ARG build_context_mount_path='/mnt/build-context/docker'
ARG PROC_COMP_CONFIG='/opt/process-compose'
ENV PROC_COMP_CONFIG="${PROC_COMP_CONFIG}"
ARG process_compose_config_target="${PROC_COMP_CONFIG}/config/docker.process-compose.yml"

RUN \
  --mount=from='build-context',target="${build_context_mount_path}" \
<<'SETUP_DOCKER'

echo "=== [docker] install /etc/apt/sources.list.d/docker.sources"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
      {${build_context_mount_path},}/etc/apt/sources.list.d/docker.sources

echo '=== [docker] apt-get update'
apt-get update

echo '=== [docker] apt-get install docker-ce docker-ce-cli docker-*-plugin'
apt-get install \
-qq \
--no-install-recommends \
--no-install-suggests \
    docker-ce \
    docker-ce-cli \
    docker-buildx-plugin \
    docker-compose-plugin \
    docker-model-plugin

echo '=== [docker]apt-get clean'
apt-get clean

echo '=== [docker] rm -rf /var/lib/apt/lists/*'
rm -rf /var/lib/apt/lists/*

echo '=== [docker] clean up'
rm -rf \
  /etc/docker \
  /etc/default/docker \
  /etc/init.d/docker \
  /lib/systemd/system/docker.socket \
  /lib/systemd/system/docker.service

echo '=== [docker] use iptables-legacy if available'
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
  printf '=== [docker] install "%s"\n' \
    "${script}"
  install \
    --owner='root' \
    --group='root' \
    --mode='755' \
      {${build_context_mount_path},}${script}
done

echo '=== [docker] ensure docker cli & daemon config directories exists'
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
  printf '=== [docker] install config file "%s"\n' \
    "${config_file}"
  install \
    --owner='root' \
    --group='root' \
    --mode='770' \
      {${build_context_mount_path},}${config_file}
done

echo '=== [docker] ensure process-compose config directory exists'
install \
  --directory \
  --mode='755' \
  --owner='root' \
  --group='root' \
    "${PROC_COMP_CONFIG}" \
    "${PROC_COMP_CONFIG}"/config/

printf '=== [docker] install process-compose service config "%s"\n' \
  "${process_compose_config_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_config_target}

echo '=== [docker] Finished installation.'
SETUP_DOCKER

ARG PC_CONFIG_FILES="${PC_CONFIG_FILES:-}${PC_CONFIG_FILES:+,}${process_compose_config_target}"
ENV PC_CONFIG_FILES="${PC_CONFIG_FILES}"

## Environment variables used by docker cli
## https://docker-docs.uclv.cu/engine/reference/commandline/cli/#environment-variables
ENV DOCKER_CONFIG='/opt/docker/cli'
ENV DOCKER_CLI_EXPERIMENTAL='enabled'

## Environment variables to configure BuildKit and Buildx
## see: https://docs.docker.com/build/buildkit/
## - DOCKER_BUILDKIT=1 enables BuildKit for docker build commands with engine version lower than v23.0
## - Buildx always uses BuildKit
ENV DOCKER_BUILDKIT='1'
ENV BUILDKIT_PROGRESS='plain'
ENV BUILDKIT_NO_DEFAULT_ATTESTATIONS='1'
ENV BUILDX_EXPERIMENTAL='1'

## Environment variables used by docker compose plugin
## see: https://docker-docs.uclv.cu/compose/reference/envvars/
ENV COMPOSE_PROGRESS='plain'
ENV COMPOSE_BAKE='true'

# @todo: add back "devcontainer.metadata" label
