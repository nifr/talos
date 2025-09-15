## syntax=docker/dockerfile:1-labs

ARG base_image='docker.io/library/debian:12-slim'
FROM "${base_image}" AS base

FROM base
ARG build_context_mount_path='/mnt/build-context'
ARG process_compose_config_target='/opt/process-compose/config/mcp-inspector.process-compose.yml'
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'INSTALL'
echo '=== install "${process_compose_config_target}"\n' \
  "${process_compose_config_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_config_target}
INSTALL

ARG PC_CONFIG_FILES="${PC_CONFIG_FILES:-}${PC_CONFIG_FILES:+,}${process_compose_config_target}"
ENV PC_CONFIG_FILES="${PC_CONFIG_FILES}"