# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

## -> error -> ERROR: target devcontainer-galawork: failed to solve: exit code: 255
ARG base_image='docker.io/library/debian:12-slim'

FROM "${base_image}" AS base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
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

FROM base AS delta
ARG TARGETARCH
# renovate: datasource=github-releases depName=delta packageName=dandavison/delta
ARG delta_version='0.18.2'
ARG delta_architecture="${TARGETARCH/arm64/aarch64}"
ARG delta_architecture="${delta_architecture/amd64/x86_64}"
## https://github.com/dandavison/delta/releases/download/0.18.2/delta-0.18.2-aarch64-unknown-linux-gnu.tar.gz
## https://github.com/dandavison/delta/releases/download/0.18.2/delta-0.18.2-x86_64-unknown-linux-gnu.tar.gz
ARG delta_download_url="https://github.com/dandavison/delta/releases/download/${delta_version}/delta-${delta_version}-${delta_architecture}-unknown-linux-gnu.tar.gz"
RUN <<'INSTALL_DELTA'
echo '=== [delta] download and install ...'
curl -sLo- ${delta_download_url} \
| tar -xzf- --to-stdout --strip-components=1 "delta-${delta_version}-${delta_architecture}-unknown-linux-gnu/delta" \
| install --mode=755 /dev/stdin /usr/local/bin/delta

echo '=== [delta] print version'
delta --version

echo '=== [delta] installation complete.'
INSTALL_DELTA

FROM base AS bat
ARG TARGETARCH
# renovate: datasource=github-releases depName=bat packageName=sharkdp/bat
ARG bat_version='0.25.0'
ARG bat_architecture="${TARGETARCH/arm64/aarch64}"
ARG bat_architecture="${bat_architecture/amd64/x86_64}"
## https://github.com/sharkdp/bat/releases/download/v0.25.0/bat-v0.25.0-aarch64-unknown-linux-musl.tar.gz
## https://github.com/sharkdp/bat/releases/download/v0.25.0/bat-v0.25.0-x86_64-unknown-linux-musl.tar.gz
ARG bat_download_url="https://github.com/sharkdp/bat/releases/download/v${bat_version}/bat-v${bat_version}-${bat_architecture}-unknown-linux-musl.tar.gz"
RUN <<'INSTALL_BAT'
echo '=== [bat] download and install ...'
curl -sLo- ${bat_download_url} \
| tar -xzf- --to-stdout --strip-components=1 "bat-v${bat_version}-${bat_architecture}-unknown-linux-musl/bat" \
| install --mode=755 /dev/stdin /usr/local/bin/bat

echo '=== [bat] print version'
bat --version

echo '=== [bat] installation complete.'
INSTALL_BAT

FROM base AS eza
ARG TARGETARCH
# renovate: datasource=github-releases depName=eza packageName=eza-community/eza
ARG eza_version='0.23.0'
ARG eza_architecture="${TARGETARCH/arm64/aarch64}"
ARG eza_architecture="${eza_architecture/amd64/x86_64}"
## https://github.com/eza-community/eza/releases/download/v0.23.0/eza_aarch64-unknown-linux-gnu.tar.gz
## https://github.com/eza-community/eza/releases/download/v0.23.0/eza_x86_64-unknown-linux-gnu.tar.gz
ARG eza_download_url="https://github.com/eza-community/eza/releases/download/v${eza_version}/eza_${eza_architecture}-unknown-linux-gnu.tar.gz"

RUN <<'INSTALL_EZA'
echo '=== [eza] download and install ...'
curl -sLo- ${eza_download_url} \
| tar -xzf- --to-stdout './eza' \
| install --mode=755 /dev/stdin /usr/local/bin/eza
echo '=== [eza] print version'
eza --version
echo '=== [eza] installation complete.'
INSTALL_EZA

FROM base AS lazygit
ARG TARGETARCH
# renovate: datasource=github-releases depName=lazygit packageName=jesseduffield/lazygit
ARG lazygit_version='0.53.0'
## https://github.com/jesseduffield/lazygit/releases/download/v0.53.0/lazygit_0.53.0_Linux_arm64.tar.gz
## https://github.com/jesseduffield/lazygit/releases/download/v0.53.0/lazygit_0.53.0_Linux_x86_64.tar.gz
ARG lazygit_architecture="${TARGETARCH/amd64/x86_64}"
ARG lazygit_download_url="https://github.com/jesseduffield/lazygit/releases/download/v${lazygit_version}/lazygit_${lazygit_version}_Linux_${lazygit_architecture}.tar.gz"
RUN <<'INSTALL_LAZYGIT'
echo '=== [lazygit] download and install ...'
curl -sLo- ${lazygit_download_url} \
| tar -xzf- --to-stdout 'lazygit' \
| install --mode=755 /dev/stdin /usr/local/bin/lazygit
echo '=== [lazygit] print version'
lazygit --version
echo '=== [lazygit] installation complete.'
INSTALL_LAZYGIT

FROM base
ARG build_context_mount_path='/mnt/build-context'
RUN \
    --mount=from=delta,target=${build_context_mount_path}/delta \
    --mount=from=bat,target=${build_context_mount_path}/bat \
    --mount=from=eza,target=${build_context_mount_path}/eza \
    --mount=from=lazygit,target=${build_context_mount_path}/lazygit \
<<'COPY_UTILS'
echo '=== copy utils from previous stages ...'
install \
  --owner=root \
  --group=root \
  --mode=755 \
    ${build_context_mount_path}/delta/usr/local/bin/delta \
    ${build_context_mount_path}/bat/usr/local/bin/bat \
    ${build_context_mount_path}/eza/usr/local/bin/eza \
    ${build_context_mount_path}/lazygit/usr/local/bin/lazygit \
      /usr/local/bin/
echo '=== utils installed.'
COPY_UTILS


WORKDIR /workspaces

ARG GIT_CONFIG_SYSTEM='/etc/xdg/git/.gitconfig'
ENV GIT_CONFIG_SYSTEM="${GIT_CONFIG_SYSTEM}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_GIT'

install -d -m 2755 \
  /etc/xdg/ \
  /etc/xdg/git/ \
  /etc/xdg/git/.gitconfig.d/

install -m 444 \
  {${build_context_mount_path},}${GIT_CONFIG_SYSTEM}

install -m 444 \
  {${build_context_mount_path},}/etc/xdg/git/.gitignore

install -m 444 \
  {${build_context_mount_path},}/etc/xdg/git/.gitattributes

## note: there is no wildcard support for "insteadOf" directives in git config files
## see:  https://stackoverflow.com/q/71653203
install -m 444 \
  {${build_context_mount_path},}/etc/xdg/git/.gitconfig.d/github-ssh.gitconfig

install -m 444 \
  {${build_context_mount_path},}/etc/xdg/git/.gitconfig.d/github-https.gitconfig
SETUP_GIT

ARG ssh_known_hosts_file="/etc/ssh/ssh_known_hosts"
COPY --chmod=555 --chown=root:root \
<<SSH_CONFIG /etc/ssh/ssh_config
Host github.com github gh
  HostName github.com
  User git
  CheckHostIP no
  RequestTTY no
  LogLevel VERBOSE
Host *
  SendEnv LANG LC_*
  HashKnownHosts yes
  PreferredAuthentications publickey
  PubkeyAuthentication yes
  KbdInteractiveAuthentication no
  PasswordAuthentication no
  GSSAPIAuthentication no
  StrictHostKeyChecking accept-new
  UserKnownHostsFile ${ssh_known_hosts_file:?}
  GlobalKnownHostsFile ${ssh_known_hosts_file}
SSH_CONFIG

RUN <<'GITHUB_KNOWN_HOSTS'
#!/bin/bash
set -o errexit -o pipefail -o noclobber -o nounset

>&2 printf 'INFO: Save Host Keys for "github.com" to SSH known hosts file "%s" ... ' \
  "${ssh_known_hosts_file:?}"
install -o root -g root -m 744 /dev/null "${ssh_known_hosts_file}"
&>/dev/null ssh-keygen -F github.com -f "${ssh_known_hosts_file}" || ( 2>/dev/null ssh-keyscan -H github.com | tee "${ssh_known_hosts_file}" &>/dev/null) || true
>&2 echo 'OK'

>&2 echo 'INFO: Downloaded the following host keys for GitHub:'
cat "${ssh_known_hosts_file}" | awk '{ printf "%s %s\n", $2, $3 }' | xargs -d '\n' printf 'INFO: - "%s"\n' >&2
GITHUB_KNOWN_HOSTS

ARG ZDOTDIR='/etc/xdg/zsh'
ENV ZDOTDIR="${ZDOTDIR}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_ZSH'

declare -a requiredAptPackagesMissing=()

if ! command -v zsh >/dev/null 2>&1; then
  requiredAptPackagesMissing+=('zsh')
fi

declare -i requiredAptPackagesMissingCount=${#requiredAptPackagesMissing[@]}
printf '=== Need to install %s required apt packages\n' \
  "${requiredAptPackagesMissingCount}"

if [ $requiredAptPackagesMissingCount -gt 0 ]; then
  printf '=== Run apt-get update\n'
  apt-get update

  printf '=== Install required apt packages:\n'
  printf '=== * \n' \
    "${requiredAptPackagesMissing[@]}"
  apt-get install \
    --option 'Debug::pkgProblemResolver=true' \
    --option 'Debug::pkgAcquire::Worker=1' \
    --yes \
    --no-install-recommends \
    --no-install-suggests \
        "${requiredAptPackagesMissing[@]}"

  printf '=== Clear apt package lists folder\n'
    rm -rf \
    /var/lib/apt/lists/*
fi


chsh \
  --shell /bin/zsh \
  root

install \
  --directory \
  --mode=2755 \
  /etc/xdg \
  "${ZDOTDIR:?}"

install \
  --owner=root \
  --group=root \
  --mode=744 \
  {${build_context_mount_path},}/etc/xdg/zsh/.zshrc

install \
  --owner=root \
  --group=root \
  --mode=744 \
  {${build_context_mount_path},}/etc/zsh/zshenv
SETUP_ZSH

ARG STARSHIP_CONFIG='/etc/xdg/starship/starship.toml'
ENV STARSHIP_CONFIG="${STARSHIP_CONFIG}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_STARSHIP'

install -d -m 2755 \
  /etc/xdg/ \
  /etc/xdg/starship/

install -m 744 \
  {${build_context_mount_path},}${STARSHIP_CONFIG:?}
SETUP_STARSHIP

ARG DIRENV_CONFIG='/etc/xdg/direnv'
ENV DIRENV_CONFIG="${DIRENV_CONFIG}"
ARG DIRENV_LOG_FORMAT="[38;2;85;180;190mdirenv(B[m: %s"
ENV DIRENV_LOG_FORMAT="${DIRENV_LOG_FORMAT}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_DIRENV'

install \
  --owner=root \
  --group=root \
  --directory \
  --mode=2755 \
  /etc/xdg/ \
  "${DIRENV_CONFIG:?}"

install \
  --owner=root \
  --group=root \
  --mode=744 \
  {${build_context_mount_path},}${DIRENV_CONFIG}/direnv.toml
SETUP_DIRENV

ARG EZA_CONFIG_DIR='/etc/xdg/eza'
ENV EZA_CONFIG_DIR="${EZA_CONFIG_DIR}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_EZA'

install \
  --directory \
  --owner=root \
  --group=root \
  --mode=2755 \
  /etc/xdg/ \
  ${EZA_CONFIG_DIR:?}

## note:  pkgx/pkgm installs curl (why?) and overrides LD_LIBRARY_PATH in the shim /usr/local/bin/curl ... leading to the following error.
## error: curl: error while loading shared libraries: libssl.so.1.1: cannot open shared object file: No such file or director
## note:  candidates with strange dependencies are: lazygit, eza, delta, bat
/bin/curl -sL \
  -o "${EZA_CONFIG_DIR}/theme.yml" \
  'https://raw.githubusercontent.com/eza-community/eza-themes/refs/heads/main/themes/one_dark.yml'
SETUP_EZA

## start: [lazygit:config]
ARG LG_CONFIG_FILE='/etc/xdg/lazygit/lazygit.yml'
ENV LG_CONFIG_FILE="${LG_CONFIG_FILE}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_LAZYGIT'
install -d -m 2755 \
  /etc/xdg/ \
  /etc/xdg/lazygit/

install -m 644 \
  {${build_context_mount_path},}${LG_CONFIG_FILE:?}
SETUP_LAZYGIT
## end: [lazygit:config]

## start: [lazygit:vscode]
## note:  enables lazygit toggle in VSCode with CMD+Shift+L
## note:  "lazygit-vscode.autoMaximizeWindow": true -> has issues! opens Copilot every time lazygit is opened
ENV _devcontainer_metadata_to_add='[{ \
  "customizations": { \
    "vscode": { \
      "extensions": [ \
\
        "TomPollak.lazygit-vscode" \
\
      ], \
      "settings": { \
\
        "telemetry.telemetryLevel": "off", \
\
        "lazygit-vscode.autoMaximizeWindow": false, \
        "lazygit-vscode.panels": { \
            "sidebar": "hide", \
            "panel": "hide", \
            "secondarySidebar": "keep" \
        }, \
        "terminal.integrated.sendKeybindingsToShell": false, \
        "terminal.integrated.commandsToSkipShell": [ \
            "lazygit-vscode.toggle", \
            "workbench.action.closeWindow" \
        ] \
\
      } \
    } \
  } \
}]'
ENV _devcontainer_metadata="${_devcontainer_metadata%\}]}    },    ${_devcontainer_metadata_to_add#[}"
ENV _devcontainer_metadata_to_add=
LABEL devcontainer.metadata="${_devcontainer_metadata}"
## end: [lazygit:vscode]

ARG RIPGREP_CONFIG_PATH='/etc/xdg/ripgrep/ripgreprc'
ENV RIPGREP_CONFIG_PATH="${RIPGREP_CONFIG_PATH}"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'SETUP_RIPGREP'
install -d -m 2755 \
  /etc/xdg/ \
  /etc/xdg/ripgrep/

install -m 644 \
  {${build_context_mount_path},}${RIPGREP_CONFIG_PATH:?}
SETUP_RIPGREP

# rg --hidden --no-ignore --iglob='!.git/' --smart-case --iglob='!*.js.map' --files-with-matches [..]

ARG TARGETARCH
ARG atuin_version='18.8.0'
ARG atuin_architecture="${TARGETARCH/arm64/aarch64}"
ARG atuin_architecture="${atuin_architecture/amd64/x86_64}"
ARG atuin_download_url="https://github.com/atuinsh/atuin/releases/download/v${atuin_version}/atuin-${atuin_architecture}-unknown-linux-gnu.tar.gz"
## example url: https://github.com/atuinsh/atuin/releases/download/v18.8.0/atuin-aarch64-unknown-linux-gnu.tar.gz
RUN \
<<'INSTALL_ATUIN'
echo '=== [atuin] download and install ...'
printf '=== [atuin] download url: %s\n' "${atuin_download_url}"
curl -sLo- "${atuin_download_url}" \
| tar -xzf- --to-stdout --strip-components=1 "atuin-${atuin_architecture}-unknown-linux-gnu/atuin" \
| install --mode=755 /dev/stdin /usr/local/bin/atuin

echo '=== [atuin] print version'
atuin --version
echo '=== [atuin] installation complete.'
INSTALL_ATUIN

ENV TERMINFO_DIRS='/etc/terminfo:/lib/terminfo:/usr/share/terminfo'
