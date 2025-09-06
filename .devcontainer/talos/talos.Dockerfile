# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:13-slim'
FROM "${base_image}" AS base

FROM base

ARG debian_codename='trixie'
COPY \
--chmod=644 \
<<DOCKER_APT_REPO /etc/apt/sources.list.d/docker.sources

DOCKER_APT_REPO

RUN <<'SETUP_DOCKER'
apt-get update

apt-get install \
  -qq \
  --no-install-recommends \
    docker-ce-cli \
    docker-ce \
    docker-buildx-plugin \
    docker-compose-plugin

apt-get clean
rm -rf /var/lib/apt/lists/*
SETUP_DOCKER

ARG _devcontainer_metadata="${_devcontainer_metadata:-[{\}]}"
ENV _devccontainer_metadata_to_add='[{ \
  "features": { \
    "ghcr.io/devcontainers/features/git:1": {} \
  }, \
  "customizations": { \
    "vscode": { \
      "extensions": [ \
        "editorconfig.editorconfig", \
        "MermaidChart.vscode-mermaid-chart" \
      ], \
      "settings": { \
\
        "telemetry.telemetryLevel": "off" \
\
      } \
    } \
  } \
}]'
ENV _devcontainer_metadata="${_devcontainer_metadata%\}]}    },    ${_devccontainer_metadata_to_add#[}"
ENV _devccontainer_metadata_to_add=
LABEL devcontainer.metadata="${_devcontainer_metadata}"
