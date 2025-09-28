# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:trixie-slim'
FROM build-context

FROM "${base_image}" AS base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG TARGETARCH

FROM base
ARG TARGETARCH

## note: helm repositories are stored at ~/.config/helm/repositories.{yaml,lock} by default
ENV HELM_CONFIG_HOME='/etc/xdg/helm'
ENV HELM_DATA_HOME='/opt/helm/data'
ENV HELM_CACHE_HOME='/opt/helm/cache'

## note: k9s configuration is stored at ~/.config/k9s/konfig.yaml by default
## see:  https://pkg.go.dev/github.com/derailed/k9s#readme-k9s-configuration
## see:  https://k9scli.io/topics/skins/
ENV K9S_CONFIG_DIR='/etc/xdg/k9s'
ENV K9S_LOGS_DIR='/opt/k9s/logs'
ENV K9S_SKIN='one-dark'

ARG krew_version='0.4.3'
ARG krew_download_url="https://github.com/kubernetes-sigs/krew/releases/download/v${krew_version}/krew-linux_${TARGETARCH}.tar.gz"
ARG krew_filename_in_archive="./krew-linux_${TARGETARCH}"
## [kubectl plugins installed via krew]
##
## access-matrix:     https://github.com/corneliusweig/rakkess
## > failed to install some plugins: [access-matrix]: plugin "access-matrix" does not offer installation for this platform
## ai:                https://github.com/GoogleCloudPlatform/kubectl-ai
## cert-manager:      https://github.com/cert-manager/cert-manager
## ctx,ns:            https://github.com/ahmetb/kubectx
## oidc-login:        https://github.com/int128/kubelogin
## resource-capacity: https://github.com/robscott/kube-capacity
## stern:             https://github.com/stern/stern
##
## @todo: install concrete versions of each plugin from manifests
ARG krew_kubectl_plugins=' \
  ai \
  cert-manager \
  ctx \
  ns \
  oidc-login \
  resource-capacity \
  stern \
'
## see: https://github.com/kubernetes-sigs/krew
ENV KREW_ROOT='/opt/krew'
ENV PATH="${KREW_ROOT}/bin:${PATH}"

## see: https://github.com/robscott/kube-capacity
## install: kubectl krew install resource-capacity

## note: Some noteworthy charts are only distributed via OCI registries (not helm repositories)
## see:  https://artifacthub.io/packages/helm/open-8gears/n8n
## see:  https://artifacthub.io/packages/helm/renovate/renovate
## see:  https://docs.github.com/en/actions/tutorials/use-actions-runner-controller/quickstart

## note: kubectl CLI version tags start with kubernetes-X.Y.Z (no "v" prefix)
## @todo test/extend the Renovate bot comment below
## see: https://github.com/kubernetes/kubectl/tags
# renovate: datasource=github-tags depName=pkgx:kubectl packageName=kubernetes/kubectl
ARG kubectl_version='1.34.1'

## see: https://github.com/derailed/k9s/releases
# renovate: datasource=github-releases depName=pkgx:k9s packageName=derailed/k9s
ARG k9s_version='0.50.11'

## see: https://github.com/helm/helm/releases
# renovate: datasource=github-releases depName=pkgx:helm packageName=helm/helm
ARG helm_version='3.19.0'

ARG build_context_mount_path='/mnt/build-context/kubernetes'
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'INSTALL_KUBERNETES_TOOLS'
echo '=== [kubernetes] install kubernetes tools with "pkgm"'
sudo pkgm install \
  "kubectl@${kubectl_version}" \
  "k9s@${k9s_version}" \
  "helm@${helm_version}"

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

echo '=== [kubernetes] install helm repositories'
install \
  --owner='root' \
  --group='root' \
  --mode='777' \
    {${build_context_mount_path},}/etc/xdg/helm/repositories.yaml

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

echo '=== [kubernetes] install "k9s" theme "one-dark"'
install \
  --owner='root' \
  --group='root' \
  --mode='777' \
    {${build_context_mount_path},}/etc/xdg/k9s/skins/one-dark.yaml

echo '=== [kubernetes] create "krew" folders'
install \
--directory \
--owner='root' \
--group='root' \
--mode='2777' \
  /opt/krew/ \
  /opt/krew/bin/

echo '=== [kubernetes] install "krew" plugin manager'
curl -sLo- "${krew_download_url}" \
| 2>/dev/null tar \
    -xzf- \
    --to-stdout \
      "${krew_filename_in_archive}" \
| install \
    --owner='root' \
    --group='root' \
    --mode='755' \
      /dev/stdin \
      /usr/local/bin/kubectl-krew

echo '=== [kubernetes] install kubectl plugins with "krew"'
kubectl krew install \
  ${krew_kubectl_plugins}

echo '=== [kubernetes] install kubectl plugin completions'
declare -ra krew_kubectl_plugins_array=('krew' ${krew_kubectl_plugins})
for plugin in "${krew_kubectl_plugins_array[@]}"; do

  ## note: the completion for i.e. "kubectl resource-capacity" is "kubectl_complete-resource_capacity"
  ##       we need to replace hyphens in the plugin name with underscores
  plugin_underscore="${plugin//-/_}"
  completion_script="${KREW_ROOT}/bin/kubectl_complete-${plugin_underscore}"

  echo "=== [kubernetes] install completion for plugin: ${plugin}"
  cat <<EOF | install --mode=755 --owner=root --group=root /dev/stdin "${completion_script}"
#!/bin/sh
kubectl ${plugin} __complete "\$@"
EOF
done

echo '=== [kubernetes] finished installation.'
INSTALL_KUBERNETES_TOOLS

# @todo: add back "devcontainer.metadata" label
