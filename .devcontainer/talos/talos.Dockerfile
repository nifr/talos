# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG debian_codename='trixie'
ARG base_image="docker.io/library/debian:${debian_codename}-slim"
# hadolint ignore=DL3006
FROM "${base_image}" AS base

FROM base

## issue: VSCode complains if RedHat and Pulumi YAML extensions are enabled
## error: > You have both the Red Hat YAML extension and Pulumi YAML extension enabled. Red Hat YAML conflict with Pulumi YAML code completion.
ARG _devcontainer_metadata='[{ \
  "customizations": { \
    "vscode": { \
      "extensions": [ \
        "editorconfig.editorconfig", \
        "dotenv.dotenv-vscode", \
        "mkhl.direnv", \
        "ms-vsliveshare.vsliveshare", \
\
        "tamasfe.even-better-toml", \
\
        "bierner.markdown-preview-github-styles", \
        "bierner.markdown-emoji", \
        "bierner.markdown-checkbox", \
        "bierner.markdown-yaml-preamble", \
        "bierner.markdown-footnotes", \
        "MermaidChart.vscode-mermaid-chart", \
\
        "medo64.render-crlf", \
        "usernamehw.errorlens", \
\
        "spmeesseman.vscode-taskexplorer", \
        "augustocdias.tasks-shell-input", \
\
        "GitHub.vscode-github-actions", \
\
        "ms-ossdata.vscode-pgsql", \
        "qwtel.sqlite-viewer", \
\
        "ms-playwright.playwright", \
\
        "TomPollak.lazygit-vscode", \
\
        "ms-kubernetes-tools.vscode-kubernetes-tools", \
        "redhat.vscode-yaml", \
\
        "oven.bun-vscode", \
        "ambar.bundle-size", \
        "bradlc.vscode-tailwindcss", \
        "vitest.explorer", \
\
        "ms-azuretools.vscode-containers", \
        "docker.docker", \
        "exiasr.hadolint", \
\
        "biomejs.biome" \
\
      ], \
      "settings": { \
\
        "telemetry.telemetryLevel": "off", \
        "update.showReleaseNotes": false, \
\
        "workbench.settings.editor": "json", \
        "workbench.settings.useSplitJSON": false, \
        "workbench.editor.restoreViewState": false, \
\
        "editor.renderWhitespace": "all", \
        "editor.renderControlCharacters": true, \
        "editor.renderFinalNewline": "dimmed", \
\
        "editor.foldingImportsByDefault": true, \
\
        "explorer.fileNesting.enabled": true, \
\
        "chat.tools.autoApprove": true, \
\
        "task.autoDetect": "off", \
        "task.quickOpen.history": 0, \
        "task.allowAutomaticTasks": "on", \
\
        "files.trimTrailingWhitespace": true, \
        "files.insertFinalNewline": true, \
        "files.trimFinalNewlines": true, \
        "files.associations": { \
          ".env.*": "dotenv", \
          "**/.vscode/*.json": "jsonc", \
          "**/biome.jsonc": "jsonc", \
          "**/package.json": "json", \
          "**/tsconfig.json": "jsonc", \
          "**/tsconfig.*.json": "jsonc", \
          "**/*.tsconfig.json": "jsonc", \
          "*.json5": "jsonc", \
          "*.docker-bake.hcl": "dockerbake" \
        },  \
\
        "problems.showCurrentInStatus": false, \
        "git.enableStatusBarSync": false, \
        "git.blame.statusBarItem.enabled": false, \
        "liveshare.showInStatusBar": "whileCollaborating", \
        "gitlens.graph.statusBar.enabled": false, \
        "gitlens.statusBar.pullRequests.enabled": false, \
        "containers.contexts.showInStatusBar": false, \
\
        "git.autofetch": true, \
        "git.autoStash": true, \
        "git.fetchOnPull": true, \
        "git.pruneOnFetch": true, \
        "git.replaceTagsWhenPull": false, \
        "git.allowForcePush": true, \
        "git.useForcePushWithLease": true, \
        "git.confirmForcePush": true, \
        "git.blame.editorDecoration.enabled": true, \
\
        "pgsql.serverGroups": [ \
          { \
            "name": "PostgreSQL", \
            "id": "3C7A09B6-45F0-4529-99D2-DC1593CE70E6", \
            "isDefault": true \
          } \
        ], \
        "pgsql.connections": [ \
          { \
            "id": "29E52482-8EBA-4A50-A930-2B013C2936B2", \
            "groupId": "3C7A09B6-45F0-4529-99D2-DC1593CE70E6", \
            "authenticationType": "None", \
            "connectTimeout": 5, \
            "applicationName": "vscode-pgsql", \
            "clientEncoding": "utf8", \
            "sslmode": "disable", \
            "server": "127.0.0.1", \
            "expiresOn": 0, \
            "emptyPasswordInput": true, \
            "user": "root", \
            "database": "", \
            "profileName": "postgresql://root@127.0.0.1:5432/", \
            "port": "5432", \
            "hostaddr": "127.0.0.1", \
            "copilotAccessMode": "rw", \
            "password": "", \
            "sshPassword": "" \
          } \
        ], \
        "pgsql.openQueryResultsInTabByDefault": false, \
        "pgsql.openQueryResultsInTabByDefaultDoNotShowPrompt": true, \
        "pgsql.copilot.enable": true, \
        "pgsql.copilot.accessMode": "rw", \
        "pgsql.intelliSense.enableIntelliSense": true, \
        "pgsql.enableQueryHistoryFeature": true, \
        "pgsql.enableQueryHistoryCapture": true, \
        "pgsql.showConnectionStatusLens": true, \
        "pgsql.enableExperimentalFeatures": true, \
\
        "lazygit-vscode.autoMaximizeWindow": false, \
        "lazygit-vscode.panels": { \
          "sidebar": "hide", \
          "panel": "hide", \
          "secondarySidebar": "keep" \
        }, \
\
        "terminal.integrated.cursorStyle": "line", \
        "terminal.integrated.cursorBlinking": true, \
        "terminal.integrated.cursorWidth": 2, \
        "terminal.integrated.tabs.defaultColor": "terminal.ansiGreen", \
\
        "terminal.integrated.scrollback": 99999999, \
        "terminal.integrated.stickyScroll.enabled": false, \
        "terminal.integrated.enablePersistentSessions": false, \
\
        "terminal.integrated.shellIntegration.enabled": true, \
        "terminal.integrated.shellIntegration.history": 0, \
        "terminal.integrated.shellIntegration.decorationsEnabled": "never", \
        "terminal.integrated.shellIntegration.showCommandGuide": false, \
\
        "terminal.integrated.suggest.enabled": true, \
\
        "terminal.integrated.sendKeybindingsToShell": false, \
        "terminal.integrated.commandsToSkipShell": [ \
          "lazygit-vscode.toggle", \
          "workbench.action.closeWindow" \
        ], \
\
        "docker.lsp.telemetry": "off", \
        "docker.lsp.experimental.vulnerabilityScanning": false, \
        "docker.extension.enableComposeLanguageServer": true, \
        "yaml.schemas": { \
          "https://raw.githubusercontent.com/docker/vscode-extension/6a88caada42b57090df7ce91ec2a6561b422afe1/misc/empty.json": [ \
            "compose*y*ml", \
            "docker-compose*y*ml" \
          ] \
        }, \
\
        "vs-kubernetes": { \
          "vs-kubernetes.namespace": "default", \
          "vs-kubernetes.kubectl-path": "/usr/local/bin/kubectl", \
          "vs-kubernetes.helm-path": "/usr/local/bin/helm", \
          "vs-kubernetes.kubeconfig": "${workspaceFolder}/kubeconfig", \
          "vs-kubernetes.knownKubeconfigs": [ \
            "${userHome}/.kube/config" \
          ], \
          "checkForMinikubeUpgrade": false \
        }, \
\
        "taskExplorer.enableExplorerView": false, \
        "taskExplorer.enableSideBar": true, \
        "taskExplorer.showLastTasks": false, \
        "taskExplorer.numLastTasks": 1, \
        "taskExplorer.readUserTasks": false, \
        "taskExplorer.clickAction": "Execute", \
        "taskExplorer.showFavoritesButton": false, \
        "taskExplorer.showExecuteWithArgumentsButton": false, \
        "taskExplorer.showExecuteWithNoTerminalButton": false, \
        "taskExplorer.disableAnimatedIcons": false, \
        "taskExplorer.groupSeparator": ":", \
        "taskExplorer.expanded": { \
          "lastTasks": false, \
          "favorites": false, \
          "userTasks": false \
        }, \
\
        "[typescript]": { \
          "editor.defaultFormatter": "biomejs.biome", \
          "editor.formatOnSave": true, \
          "editor.codeActionsOnSave": { \
            "source.organizeImports.biome": "explicit", \
            "source.fixAll.biome": "explicit" \
          } \
        }, \
\
        "[markdown]": { \
          "files.trimTrailingWhitespace": false \
        } \
\
      } \
    } \
  } \
}]'
## remove all whitespace inside the _devcontainer_metadata variable to save space in the label
## attempts to prevent broken builds
## see: https://medium.com/@tonistiigi/new-dockerfile-capabilities-in-v1-7-0-be6873650741
ARG _devcontainer_metadata="${_devcontainer_metadata// /}"
LABEL devcontainer.metadata="${_devcontainer_metadata}"
ARG _devcontainer_metadata=''
