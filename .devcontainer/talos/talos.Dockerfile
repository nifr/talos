# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:13-slim'
FROM "${base_image}" AS base

FROM base

ARG _devcontainer_metadata="${_devcontainer_metadata:-[{\}]}"
ENV _devcontainer_metadata_to_add='[{ \
  "features": { \
    "ghcr.io/devcontainers/features/git:1": {} \
  }, \
  "customizations": { \
    "vscode": { \
      "extensions": [ \
        "editorconfig.editorconfig", \
        "dotenv.dotenv-vscode", \
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
ENV _devcontainer_metadata="${_devcontainer_metadata%\}]}    },    ${_devcontainer_metadata_to_add#[}"
ENV _devcontainer_metadata_to_add=
LABEL devcontainer.metadata="${_devcontainer_metadata}"
