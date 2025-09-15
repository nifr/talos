# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/pkgxdev/pkgx:debian'
FROM "${base_image}" AS base

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
INSTALL_DEPENDENCIES

FROM base

## see: https://github.com/python/cpython/tags
# renovate: datasource=github-releases depName=python packageName=python/cpython
ARG python_version='3.13.7'

ARG PYTHONUNBUFFERD='1'
ENV PYTHONUNBUFFERED="${PYTHONUNBUFFERD}"

ARG PYTHONDONTWRITEBYTECODE='1'
ENV PYTHONDONTWRITEBYTECODE="${PYTHONDONTWRITEBYTECODE}"
## this changes where Python stores the ".pyc" files by default
## see: https://docs.python.org/3/using/cmdline.html#envvar-PYTHONPYCACHEPREFIX
ARG PYTHONPYCACHEPREFIX="/var/cache/python/${python_version}/pycache"
ENV PYTHONPYCACHEPREFIX="${PYTHONPYCACHEPREFIX}"

## see:  https://github.com/astral-sh/uv/releases
## see:  https://pkgx.dev/pkgs/crates.io/fd-find/
## note: pkgx version requires "libgit2.org" :D
## size: uv is 37M
## size: uvx is 370K
## size: /opt/uv with Python 3.13.5 installed is 94M
# renovate: datasource=github-releases depName=pkgx:uv packageName=astral-sh/uv
ARG uv_version='0.8.15'
ARG uv_base_dir='/opt/uv'
ARG uv_bin_dir="${uv_base_dir}/bin"
ARG uv_group_name='uv-users'
ARG uv_group_gid='3001'
## see: https://docs.astral.sh/uv/configuration/environment/
ARG UV_TOOL_DIR="${uv_base_dir}/tools"
ENV UV_TOOL_DIR="${UV_TOOL_DIR}"
ARG UV_TOOL_BIN_DIR="${uv_bin_dir}"
ENV UV_TOOL_BIN_DIR="${UV_TOOL_BIN_DIR}"
ARG UV_PYTHON_INSTALL_DIR="${uv_base_dir}/python"
ENV UV_PYTHON_INSTALL_DIR="${UV_PYTHON_INSTALL_DIR}"
ARG UV_PYTHON_BIN_DIR="${uv_bin_dir}"
ENV UV_PYTHON_BIN_DIR="${UV_PYTHON_BIN_DIR}"
ARG PATH="${uv_bin_dir}:${PATH}"
ENV PATH="${PATH}"
ARG TARGETARCH
RUN <<INSTALL_PYTHON
#!/usr/bin/env -S bash -o errexit -o pipefail -o nounset

echo '=== create "uv-users" group'
groupadd \
  --gid "${uv_group_gid:?}" \
  "${uv_group_name:?}"

echo '=== create uv folders for python, tools and the binaries'
install \
  --directory \
  --owner='root' \
  --group='uv-users' \
  --mode='2775' \
   "${uv_base_dir:?}" \
   "${uv_bin_dir:?}" \
   "${UV_TOOL_DIR:?}" \
   "${UV_TOOL_BIN_DIR:?}" \
   "${UV_PYTHON_INSTALL_DIR:?}" \
   "${UV_PYTHON_BIN_DIR:?}"

readonly uv_architecture="$(case "${TARGETARCH:?}" in 'amd64') echo -n  'x86_64';; 'arm64') echo -n 'aarch64';; esac)"

echo '=== Install uv and uvx'
curl \
  -sL \
  --fail \
  -o- \
  "https://github.com/astral-sh/uv/releases/download/${uv_version:?}/uv-${uv_architecture:?}-unknown-linux-musl.tar.gz" \
| tar \
    -xz \
    -C /usr/local/bin \
    --strip-components=1 \
    "uv-${uv_architecture}-unknown-linux-musl/uv" \
    "uv-${uv_architecture}-unknown-linux-musl/uvx"

echo '=== fix uv ownership and permissions'
chown root:root /usr/local/bin/{uv,uvx}
chmod 755 /usr/local/bin/{uv,uvx}

echo '=== install Python with uv'
## note: --defaults only works in combination with --preview in uv v0.7.19
uv python install \
  --force \
  --no-cache \
  --no-progress \
  --preview --default \
    "${python_version:?}"
INSTALL_PYTHON

## @todo: VSCode Python extensions:
## - [python] ms-python.python
## - [python:debugger] ms-python.debugpy
## - [python:docstrings] njpwerner.autodocstring
## - [python:dependencies] the0807.uv-toolkit -> requires "uv" CLI, @todo: test the extension
## - [toml] tamasfe.even-better-toml -> requires "taplo" CLI
## - [python:linter] charliermarsh.ruff -> requires "ruff" CLI
## - [python:helper] KevinRose.vsc-python-indent -> @todo: test the extension, mixed reviews, 10M installs but still needed?
## Testing
## - [test-explorer] hbenl.vscode-test-explorer , deprecated but can be configured to use the native VSCode Test UI
## - [test-explorer:liveshare] hbenl.vscode-test-explorer-liveshare
## - [test-explorer:python] LittleFoxTeam.vscode-python-test-adapter - integrates pytest, unittest and more into Test Explorer
##
