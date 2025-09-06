## syntax=docker/dockerfile:1-labs
## check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:12-slim'
FROM "${base_image}" AS base

FROM base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG TARGETARCH

## see: https://github.com/pkgxdev/pkgx/releases
# renovate: datasource=github-releases depName=pkgx packageName=pkgxdev/pkgx
ARG pkgx_version='2.7.0'
## see: https://github.com/pkgxdev/pkgm/releases
# renovate: datasource=github-releases depName=pkgm packageName=pkgxdev/pkgm
ARG pkgm_version='0.11.1'

## note: we use "sudo pkgm [..]" because without it "pkgm" complains as follows:
## warning: "warning installing as root; installing via `sudo` is preferred"
ARG SUDO_USER='root'
RUN <<'SETUP'
#!/usr/bin/env -S bash --noprofile --norc -o errexit -o pipefail -o nounset

apt-get update
apt-get install \
  -qq \
  --no-install-recommends \
  --no-install-suggests \
  ca-certificates \
  curl \
  tar \
  xz-utils \
  sudo

apt-get clean
rm -rf /var/lib/apt/lists/*

readonly pkgx_architecture=$(case "${TARGETARCH}" in 'amd64') echo 'x86-64' ;; 'arm64') echo 'aarch64' ;; esac)

curl \
  -sL \
  -o- \
  "https://github.com/pkgxdev/pkgx/releases/download/v${pkgx_version}/pkgx-${pkgx_version}+linux+${pkgx_architecture}.tar.xz" \
| tar \
    -xJ \
    -f- \
    --to-stdout \
      pkgx \
| install \
    -m 755 \
      /dev/stdin \
      /usr/local/bin/pkgx

curl -svvL \
  --fail \
  -o- \
  "https://github.com/pkgxdev/pkgm/releases/download/v${pkgm_version}/pkgm-${pkgm_version}.tgz" \
| tar \
  -f- \
  -xz \
  --to-stdout \
  pkgm \
| install \
  -m 755 \
    /dev/stdin \
    /usr/local/bin/pkgm
SETUP
