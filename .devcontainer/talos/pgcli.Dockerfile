# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='0.8.17-python3.13-trixie'
FROM "${base_image}" AS base

# FROM build-context

FROM base
## see: https://github.com/dbcli/pgcli/tags
# renovate: datasource=github-tags depName=uv:pgcli packageName=dbcli/pgcli
ARG pgcli_version='4.3.0'
ARG build_mount_target='/mnt/build/pgcli'

## note: pgcli does not load a global configuration file like mycli does
## see:  https://github.com/dbcli/mycli/blob/29059dd06ea04b28c8875da934bd06eb04e3a7ea/mycli/main.py#L95
## see:  https://github.com/dbcli/pgcli/blob/f46d8446a34084cc2532041619d1f08bda7213e7/pgcli/config.py#L10
##
## @todo create a pgcli shim that sets XDG_CONFIG_HOME to /etc/xdg so it loads config /etc/xdg/pgcli/pgclirc
# ARG pgcli_config_path_global='/etc/pgclirc'
# --mount=from=build-context,target=${build_mount_target} \
RUN \
<<'INSTALL_PGCLI'
if dpkg -s less >/dev/null 2>&1; then
  echo '=== less is already installed. Skipping installation...'
else
  echo '=== apt-get update'
  apt-get update

  echo '=== apt-get install less'
  apt-get install \
  -qq \
  --no-install-recommends \
  --no-install-suggests \
      less

  apt-get clean
  rm -rf /var/lib/apt/lists/*
fi

echo '=== install pgcli with uv'
uv tool install "pgcli==${pgcli_version:?}"

# echo '=== install pgcli config'
# install \
#   --owner=root \
#   --group=root \
#   --mode=777 \
#   "${build_mount_target}${pgcli_config_path_global}" \
#   "${pgcli_config_path_global}"
INSTALL_PGCLI
