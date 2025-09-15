# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:trixie-slim'
FROM "${base_image}" AS base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG TARGETARCH

FROM base

## note: helm repositories are stored at ~/.config/helm/repositories.{yaml,lock} by default
ENV HELM_CONFIG_HOME="/etc/xdg/helm"
ENV HELM_DATA_HOME="/opt/helm/data"
ENV HELM_CACHE_HOME="/opt/helm/cache"

## note: k9s configuration is stored at ~/.config/k9s/konfig.yaml by default
## see:  https://pkg.go.dev/github.com/derailed/k9s#readme-k9s-configuration
## see:  https://k9scli.io/topics/skins/
ENV K9S_CONFIG_DIR='/etc/xdg/k9s'
ENV K9S_LOGS_DIR='/opt/k9s/logs'
ENV K9S_SKIN='one-dark'

## see: https://github.com/kubernetes-sigs/krew
ENV KREW_ROOT="/opt/krew"
ENV PATH="${KREW_ROOT}/bin:${PATH}"

## see: https://github.com/robscott/kube-capacity
## install: kubectl krew install resource-capacity

## note: while we deploy common helm repositories to our devcontainer
##       noteworthy charts are only distributed via OCI registries
## see: https://artifacthub.io/packages/helm/open-8gears/n8n
## see: https://artifacthub.io/packages/helm/renovate/renovate
## see: https://docs.github.com/en/actions/tutorials/use-actions-runner-controller/quickstart

RUN <<'INSTALL_KUBERNETES_TOOLS'
echo '=== [kubernetes] install kubernetes tools with "pkgm"'
sudo pkgm install \
  kubectl \
  kubectx \
  k9s \
  helm

  echo '=== [kubernetes] create "helm" folders'
install \
  --directory \
  --owner='root' \
  --group='root' \
  --mode='2777' \
  /opt/helm/ \
  /opt/helm/data/ \
  /opt/helm/cache/ \
  /etc/xdg/helm/

echo '=== [kubernetes] create "k9s" folders'
install \
  --directory \
  --owner='root' \
  --group='root' \
  --mode='2777' \
  /opt/k9s/ \
  /opt/k9s/logs/ \
  /etc/xdg/k9s/ \
  /etc/xdg/k9s/skins/

echo '=== [kubernetes] create "krew" folders'
install \
--directory \
--owner='root' \
--group='root' \
--mode='2777' \
  /opt/krew/ \
  /opt/krew/bin/

echo '=== [kubernetes] finished installation.'
INSTALL_KUBERNETES_TOOLS

# @todo: add back "devcontainer.metadata" label
