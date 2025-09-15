# syntax=docker/dockerfile:1-labs
# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:trixie-slim'
FROM "${base_image}" AS base

FROM base

FROM base AS s6-overlay
ARG TARGETARCH
## see: https://github.com/just-containers/s6-overlay/releases
# renovate: datasource=github-releases depName=s6-overlay packageName=just-containers/s6-overlay
ARG s6_overlay_version='3.2.1.0'
ARG s6_overlay_architecture="${TARGETARCH/arm64/aarch64}"
ARG s6_overlay_architecture="${s6_overlay_architecture/amd64/x86_64}"
ADD https://github.com/just-containers/s6-overlay/releases/download/v${s6_overlay_version}/s6-overlay-noarch.tar.xz \
    https://github.com/just-containers/s6-overlay/releases/download/v${s6_overlay_version}/s6-overlay-${s6_overlay_architecture}.tar.xz \
    /tmp/
ARG apt_packages_required=' \
  tar \
  xz-utils \
'
RUN <<'INSTALL_S6_OVERLAY'
if dpkg -s ${apt_packages_required} >/dev/null 2>&1; then
    echo '=== apt dependencies already installed. Skipping installation...'
else
    echo '=== apt-get update'
    apt-get update

    echo '=== apt-get install less'
    apt-get install \
    -qq \
    --no-install-recommends \
    --no-install-suggests \
        ${apt_packages_required}

    apt-get clean
    rm -rf /var/lib/apt/lists/*
fi

echo '=== install s6-overlay'
tar -C / -Jxpf '/tmp/s6-overlay-noarch.tar.xz'
tar -C / -Jxpf "/tmp/s6-overlay-${s6_overlay_architecture}.tar.xz"
INSTALL_S6_OVERLAY

FROM base

COPY \
  --from=s6-overlay \
  /command \
  /command

COPY \
  --from=s6-overlay \
  /package \
  /package

ARG PATH="${PATH}:/command"
ENV PATH="${PATH}"
