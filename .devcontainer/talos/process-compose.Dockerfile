# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

FROM build-context

FROM base

SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG TARGETARCH

## see: https://github.com/F1bonacc1/process-compose/releases
# renovate: datasource=github-releases depName=process-compose packageName=F1bonacc1/process-compose
ARG process_compose_version='1.73.0'

## note: PROC_COMP_CONFIG is the global config folder for process-compose, contains {settings,theme,shortcuts}.yaml
ARG PROC_COMP_CONFIG='/opt/process-compose'
ENV PROC_COMP_CONFIG="${PROC_COMP_CONFIG}"

ARG build_context_mount_path='/mnt/build-context/process-compose'
ARG process_compose_config_target="${PROC_COMP_CONFIG}/config/process-compose.yml"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
  <<'INSTALL_PROCESS_COMPOSE'

echo '=== apt-get update'
apt-get update

echo '=== apt-get install [..]'
apt-get install -qq \
  --no-install-recommends \
  --no-install-suggests \
    ca-certificates \
    curl \
    tar

echo '=== apt-get clean'
apt-get clean

echo '=== rm -rf /var/lib/apt/lists/*'
rm -rf /var/lib/apt/lists/*

curl \
    --fail \
    --location \
    --silent \
    --show-error \
    --output - \
    "https://github.com/F1bonacc1/process-compose/releases/download/v${process_compose_version:?}/process-compose_linux_${TARGETARCH:?}.tar.gz" \
  | tar -f- -O -xz 'process-compose' \
  | install -m 755 -o root -g root /dev/stdin /usr/local/bin/process-compose

echo '=== create global config folder'
## contains {settings,theme,shortcuts}.yaml
## see: https://f1bonacc1.github.io/process-compose/tui/
## prevents warning:
## {
##    "level":"warn",
##    "error":"could not locate `process-compose` in any of the following paths: [/root/.config /etc/xdg]",
##    "time":"2025-07-04T10:35:50Z",
##    "message":"Path not found for process compose config home"
## }
install \
  --directory \
  --mode=755 \
  --owner=root \
  --group=root \
    "${PROC_COMP_CONFIG:?}" \
    "${PROC_COMP_CONFIG:?}"/config/

declare -ra process_compose_config_files=(
  "${PROC_COMP_CONFIG}/settings.yaml"
  "${PROC_COMP_CONFIG}/theme.yaml"
  "${PROC_COMP_CONFIG}/shortcuts.yaml"
)

for process_compose_config_file in "${process_compose_config_files[@]}"; do
  echo "=== install process-compose config file: ${process_compose_config_file}"
  install \
    --mode=777 \
    --owner=root \
    --group=root \
      {${build_context_mount_path},}${process_compose_config_file}
done

printf '=== install "%s"\n' \
  "${process_compose_config_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_config_target}
INSTALL_PROCESS_COMPOSE

## note: this prepends the base config for process-compose to the PC_CONFIG_FILES list
##       PC_CONFIG_FILES is a comma-separated list of process-compose config files to load
ARG PC_CONFIG_FILES="${process_compose_config_target}${PC_CONFIG_FILES:+,}${PC_CONFIG_FILES:-}"
ENV PC_CONFIG_FILES="${PC_CONFIG_FILES}"

## required to display colors correctly in process-compose terminal user interface (TUI)
ENV TERM='xterm-256color'
ENV COLORTERM='truecolor'

ENV LANG='C.UTF-8'
ENV LC_ALL='C.UTF-8'

CMD [ \
  "process-compose", \
  "--tui=false", \
  "--port=8080", \
  "--disable-dotenv" \
]
