# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:12-slim'
ARG npm_config_image='ghcr.io/galabau-workgroup/config:npm-latest'
FROM "${npm_config_image}" AS npm-config
FROM "${base_image}" AS base

FROM base

## see:  https://github.com/oven-sh/bun/releases
## size: bun is 90M
# renovate: datasource=github-releases depName=pkgx:bun packageName=oven-sh/bun
ARG bun_version='1.2.21'
## note: do NOT install NodeJS via pkgx as it creates a very large image
##.      we install it with fnm instead to keep the image size down
##
## note: pkgx's "node" requires "libstdcxx" which in turn requires binutils
##       the "gnu.org/binutils" package alone is 430M, while "nodejs.org" is only 117M
##       https://pkgx.dev/pkgs/gnu.org/gcc/libstdcxx/
##
## note: neovim's mason requires nodeJS and npm to download language servers:
##       - dockerls
##       - Microsoft's docker_compose_language_service
##
## see: https://github.com/Schniz/fnm/releases
## size: fnm is 8.6M
# renovate: datasource=github-releases depName=pkgx:fnm packageName=Schniz/fnm
ARG fnm_version='1.38.1'
## see: https://github.com/nodejs/node/releases
## size: /opt/fnm/node-versions/v24.4.0/ is 192M, includes 17M for "npm" and 2M for "corepack"
# ARG node_version='24.4.0'
ARG node_version='24.7.0'
## see: https://www.npmjs.com/package/npm?activeTab=versions
ARG npm_version='11.6.0'
## see: https://github.com/yarnpkg/berry/releases
ARG yarn_version='4.9.4'
## see: https://github.com/pnpm/pnpm/releases
## see: https://www.npmjs.com/package/pnpm?activeTab=versions
ARG pnpm_version='10.15.1'

## npm group that owns /opt/npm/global/
ARG npm_group_name='npm-users'
ARG npm_group_gid='3002'

ARG FNM_DIR='/opt/fnm'
ENV FNM_DIR="${FNM_DIR}"
ARG PATH="/opt/npm/global/bin:${FNM_DIR}/aliases/default/bin:$PATH"
ENV PATH="${PATH}"
ARG FNM_COREPACK_ENABLED='true'
ENV FNM_COREPACK_ENABLED="${FNM_COREPACK_ENABLED}"
ARG FNM_VERSION_FILE_STRATEGY='recursive'
ENV FNM_VERSION_FILE_STRATEGY="${FNM_VERSION_FILE_STRATEGY}"
ARG FNM_RESOLVE_ENGINES='true'
ENV FNM_RESOLVE_ENGINES="${FNM_RESOLVE_ENGINES}"
ARG NPM_CONFIG_USERCONFIG='/etc/xdg/npm/user.npmrc'
ENV NPM_CONFIG_USERCONFIG="${NPM_CONFIG_USERCONFIG}"
ARG NPM_CONFIG_GLOBALCONFIG='/etc/xdg/npm/global.npmrc'
ENV NPM_CONFIG_GLOBALCONFIG="${NPM_CONFIG_GLOBALCONFIG}"

## note: xdg-utils is required for "xdg-open", which is used by "npm issues" for example
## warning: xdg-utils "recommended" dependencies are HUGE, only install with "--no-install-recommends"
ARG DEBIAN_FRONTEND=noninteractive
ARG DEBCONF_NONINTERACTIVE_SEEN=true
ARG build_mount_target='/tmp/build/npm-config'
RUN \
    --mount=from=npm-config,target=${build_mount_target} \
<<'INSTALL_NODE'
#!/usr/bin/env -S bash --noprofile --norc -o errexit -o pipefail -o nounset

if dpkg -s xdg-utils >/dev/null 2>&1; then
    echo '=== xdg-utils is already installed. Skipping installation...'
else
    echo '=== apt-get update'
    apt-get update

    echo '=== apt-get install xdg-utils'
    apt-get install \
    -qq \
    --no-install-recommends \
    --no-install-suggests \
        xdg-utils

    apt-get clean
    rm -rf /var/lib/apt/lists/*
fi

echo '=== pkgm install fnm bun'
sudo pkgm install \
  "fnm@${fnm_version}" \
  "bun@${bun_version}"

## initialize fnm, install node version in ARGs and set it as fnms default version
source <(fnm env --version-file-strategy='recursive' --shell='bash')
fnm install --corepack-enabled "${node_version}"
fnm default "${node_version}"

## install user and global npm config files
install -d -m 2755 \
  /etc/xdg/ \
  /etc/xdg/npm/

install -m 777 \
  "${build_mount_target}${NPM_CONFIG_USERCONFIG}" \
  "${NPM_CONFIG_USERCONFIG}"

install -m 744 \
  "${build_mount_target}${NPM_CONFIG_GLOBALCONFIG}" \
  "${NPM_CONFIG_GLOBALCONFIG}"

## ensure every user in group "npm-users" has access to:
## "/opt/npm/global"       - our global prefix, where npm installs global packages to ./lib/node_modules
## "/var/cache/npm/user"   - npm cache in userconfig
## "/var/cache/npm/global" - npm cache in globalconfig
groupadd \
  --gid="${npm_group_gid}" \
  "${npm_group_name}"

install --directory \
  --owner=root \
  --group="${npm_group_name}" \
  --mode=2755 \
  /opt/npm \
  /opt/npm/global/ \
  /var/cache/npm \
  /var/cache/npm/{user,global}

## note: corepack install npm@version does NOT install the correct npm version
# corepack install --global "npm@${npm_version}"
## workaround to install given npm version is to install it globally with npm itself
npm install -g "npm@${npm_version}"

## install package managers with corepack
## see: https://github.com/nodejs/corepack
corepack install --global "pnpm@${pnpm_version}"
corepack install --global "yarn@${yarn_version}"
INSTALL_NODE

## @todo: add back "devcontainer.metadata" label

## @todo: integrate oxc
## see: https://oxc.rs/docs/guide/usage/linter/config.html
##
