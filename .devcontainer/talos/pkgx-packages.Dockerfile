# syntax=docker/dockerfile:1-labs
# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

## requires "pkgx" and "sudo" to be installed

ARG base_image='docker.io/library/debian:12-slim'
FROM "${base_image}" AS base

FROM base

ARG pkgm_packages_whitelist=' \
  github/cli \
  lefthook \
  aws/cli \
  direnv \
  fd \
  freeze \
  fx \
  fzf \
  gum \
  hcloud \
  jq \
  lego \
  packer \
  pulumi \
  restic \
  rg \
  shfmt \
  starship \
  taplo \
  vivid \
  yj \
  yq \
'

ARG pkgm_packages_blacklist=' \
  bat \
  biome \
  eza \
  fnm \
  lazygit \
  delta \
  terraform \
  terragrunt \
  terraform-cdk \
  mise \
  infracost \
'

## see:  https://github.com/oven-sh/bun/releases
## see:  https://pkgx.dev/pkgs/bun.sh/
## size: bun is 90M
# renovate: datasource=github-releases depName=pkgx:bun packageName=oven-sh/bun
ARG bun_version='1.2.18'
## see: https://github.com/Schniz/fnm/releases
## see: https://pkgx.dev/pkgs/crates.io/fnm/
## size: fnm is 8.6M
# renovate: datasource=github-releases depName=pkgx:fnm packageName=Schniz/fnm
ARG fnm_version='1.38.1'
## see:  https://github.com/biomejs/biome/releases
## see: https://pkgx.dev/pkgs/biomejs.dev/
##
## note: As of 2025-07-14 the pkgx package is not up to date after 1+ months !!
##       the pkgx package is still at v1.9.4
##       biome v2.0.0 was released on 2025-06-17
##       biome v2.1.1 was released on 2025-07-08
##
## size: biome is 25M
# renovate: datasource=github-releases depName=pkgx:biome packageName=biomejs/biome
ARG biome_version='2.1.1'

## see:  https://github.com/cli/cli/releases
## see:  https://pkgx.dev/pkgs/cli.github.com/
# renovate: datasource=github-releases depName=pkgx:gh packageName=cli/cli
ARG github_cli_version='2.71.2'
## see:  https://github.com/evilmartians/lefthook/releases
## see:  https://pkgx.dev/pkgs/github.com/evilmartians/lefthook/
## size: lefthook is 13M
# renovate: datasource=github-releases depName=pkgx:lefthook packageName=evilmartians/lefthook
ARG lefthook_version='1.11.11'
## see:  https://github.com/jesseduffield/lazygit/releases
## see:  https://pkgx.dev/pkgs/github.com/jesseduffield/lazygit/
## warning: pkgx version depends on git-scm.org^2
## size: lazygit is 30M
# renovate: datasource=github-releases depName=pkgx:lazygit packageName=jesseduffield/lazygit
ARG lazygit_version='0.51.1'
## see:  https://github.com/dandavison/delta/releases
## see:  https://pkgx.dev/pkgs/crates.io/git-delta/
## note: delta v0.18.2 released 2024-09
## warning: pkgx version depends on libgit2.org~1.7
## size: delta is 7.8M
# renovate: datasource=github-releases depName=pkgx:delta packageName=dandavison/delta
ARG delta_version='0.18.2'

## see: https://github.com/aws/aws-cli/tags
# renovate: datasource=github-tags depName=pkgx:aws-cli packageName=aws/aws-cli
ARG aws_cli_version='2.26.2'
## see: https://github.com/hetznercloud/cli/releases
# renovate: datasource=github-releases depName=pkgx:hcloud packageName=hetznercloud/cli
ARG hcloud_version='1.51.0'
## see: https://github.com/hashicorp/terraform/releases
# renovate: datasource=github-releases depName=pkgx:terraform packageName=hashicorp/terraform
ARG terraform_version='1.11.4'
## see: https://github.com/gruntwork-io/terragrunt/releases
# renovate: datasource=github-releases depName=pkgx:terragrunt packageName=gruntwork-io/terragrunt
ARG terragrunt_version='0.77.17'
## see: https://github.com/infracost/infracost/releases
# renovate: datasource=github-releases depName=pkgx:infracost packageName=infracost/infracost
ARG infracost_version='0.10.41'
## see: https://github.com/hashicorp/terraform-cdk/releases
# renovate: datasource=github-releases depName=pkgx:terraform-cdk packageName=hashicorp/terraform-cdk
ARG terraform_cdk_version='0.20.11'
## see: https://github.com/go-acme/lego/releases
# renovate: datasource=github-releases depName=pkgx:lego packageName=go-acme/lego
ARG lego_version='4.22.2'
## see: https://github.com/hashicorp/packer/releases
# renovate: datasource=github-releases depName=pkgx:packer packageName=hashicorp/packer
ARG packer_version='1.12.0'
## see:  https://pkgx.dev/pkgs/pulumi.io/
## see: https://github.com/pulumi/pulumi/releases
# renovate: datasource=github-releases depName=pkgx:packer packageName=pulumi/pulumi
ARG pulumi_version='3.193.0'

## see:  https://github.com/sharkdp/bat/releases
## see:  https://pkgx.dev/pkgs/crates.io/bat/
## warning: pkgx version depends on libgit2.org~1.7, zlib.net^1
## size: bat is 5.4M
# renovate: datasource=github-releases depName=pkgx:bat packageName=sharkdp/bat
ARG bat_version='0.25.0'
## see:  https://github.com/direnv/direnv/releases
## see:  https://pkgx.dev/pkgs/direnv.net/
## size: direnv is 12M
# renovate: datasource=github-releases depName=pkgx:direnv packageName=direnv/direnv
ARG direnv_version='2.36.0'
## see:  https://github.com/eza-community/eza/releases
## see:  https://pkgx.dev/pkgs/crates.io/eza/
## warning: pkgx version depends on libgit2.org~1.7
## size: eza is 1.9M
# renovate: datasource=github-releases depName=pkgx:eza packageName=eza-community/eza
ARG eza_version='0.21.4'
## see:  https://github.com/sharkdp/fd/releases
## see:  https://pkgx.dev/pkgs/crates.io/fd-find/
## size: fd is 3.4M
# renovate: datasource=github-releases depName=pkgx:fd packageName=sharkdp/fd
ARG fd_version='10.2.0'
## see:  https://github.com/charmbracelet/freeze/releases
## see:  https://pkgx.dev/pkgs/charm.sh/freeze/
## size: freeze is 15M
# renovate: datasource=github-releases depName=pkgx:freeze packageName=charmbracelet/freeze
ARG freeze_version='0.2.2'
## see:  https://github.com/antonmedv/fx/releases
## see:  https://pkgx.dev/pkgs/fx.wtf/
## size: fx is 12M
# renovate: datasource=github-releases depName=pkgx:fx packageName=antonmedv/fx
ARG fx_version='35.0.0'
## see:  https://github.com/junegunn/fzf/releases
## see:  https://pkgx.dev/pkgs/github.com/junegunn/fzf/
## size: fzf is 4.6M
# renovate: datasource=github-releases depName=pkgx:fzf packageName=junegunn/fzf
ARG fzf_version='0.62.0'
## see:  https://pkgx.dev/pkgs/charm.sh/gum/
## see:  https://github.com/charmbracelet/gum/releases
## size: gum is 14M
# renovate: datasource=github-releases depName=pkgx:gum packageName=charmbracelet/gum
ARG gum_version='0.16.1'
## see:  https://pkgx.dev/pkgs/stedolan.github.io/jq/
## see:  https://github.com/jqlang/jq/releases
## size: jq is 3.3M
# renovate: datasource=github-releases depName=pkgx:jq packageName=jqlang/jq
ARG jq_version='1.8.1'
## see:  https://github.com/BurntSushi/ripgrep/releases
## see:  https://pkgx.dev/pkgs/crates.io/ripgrep/
## size: ripgrep is 26M
# renovate: datasource=github-releases depName=pkgx:ripgrep packageName=BurntSushi/ripgrep
ARG rg_version='14.1.1'
## see:  https://github.com/jdx/mise
## see:  https://pkgx.dev/pkgs/mise.jdx.dev/
## size: mise is 274M !!
## warning: pkgx version depends on openssl.org^1.1, libgit2.org^1
# renovate: datasource=github-releases depName=pkgx:ripgrep packageName=jdx/mise
ARG mise_version="2025.7.4"
## see:  https://github.com/restic/restic/releases
## see: https://pkgx.dev/pkgs/restic.net/restic/
# renovate: datasource=github-releases depName=pkgx:restic packageName=restic/restic
ARG restic_version='0.18.0'
## see:  https://github.com/mvdan/sh/releases
## see:  https://pkgx.dev/pkgs/mvdan.cc/sh/
# renovate: datasource=github-releases depName=pkgx:shfmt packageName=mvdan/sh
ARG shfmt_version='3.11.0'
## see:  https://github.com/starship/starship/releases
## see:  https://pkgx.dev/pkgs/starship.rs/
## size: starship is 8.2M
# renovate: datasource=github-releases depName=pkgx:starship packageName=starship/starship
ARG starship_version='1.23.0'
## see:  https://github.com/tamasfe/taplo/releases
## see:  https://pkgx.dev/pkgs/taplo.tamasfe.dev/
## size: taplo is 12M
# renovate: datasource=github-releases depName=pkgx:taplo packageName=tamasfe/taplo
ARG taplo_version='0.9.3'
## see:  https://github.com/sharkdp/vivid/releases
## see:  https://pkgx.dev/pkgs/crates.io/vivid/
## size: vivid is 0.9M
# renovate: datasource=github-releases depName=pkgx:vivid packageName=sharkdp/vivid
ARG vivid_version='0.10.1'
## see:  https://github.com/sclevine/yj/releases
## see:  https://pkgx.dev/pkgs/github.com/sclevine/yj/
## note: yj v5.1.0 released 2022-04
# renovate: datasource=github-releases depName=pkgx:yj packageName=sclevine/yj
ARG yj_version='5.1.0'
## see:  https://github.com/mikefarah/yq/releases
## see:  https://pkgx.dev/pkgs/github.com/mikefarah/yq/
## size: yq is 11M
# renovate: datasource=github-releases depName=pkgx:yq packageName=mikefarah/yq
ARG yq_version='4.45.1'

## note: these pkgx packages have dependencies that overwrite system binaries
##       i.e. curl will be replaced and complain about missing libssl because LD_LIBRARY_PATH is overriden in its shim
# [bat]="crates.io/bat@${bat_version}"
# [eza]="crates.io/eza@${eza_version}"
# [lazygit]="github.com/jesseduffield/lazygit@${lazygit_version}"
# [delta]="crates.io/git-delta@${delta_version}"
ARG SUDO_USER='root'
RUN <<'INSTALL_PACKAGES'

readonly -A pkgm_packages=(
  [bun]="bun.sh@${bun_version}"
  [fnm]="crates.io/fnm@${fnm_version}"
  [biome]="biomejs.dev@${biome_version}"

  [github/cli]="cli.github.com@${github_cli_version}"
  [lefthook]="github.com/evilmartians/lefthook@${lefthook_version}"

  [aws/cli]="aws.amazon.com/cli@${aws_cli_version}"
  [hcloud]="hetzner.com/hcloud@${hcloud_version}"

  [terraform]="terraform.io@${terraform_version}"
  [terraform-cdk]="terraform.io/cdk@${terraform_cdk_version}"
  [terragrunt]="terragrunt.gruntwork.io@${terragrunt_version}"
  [infracost]="infracost.io@${infracost_version}"
  [lego]="github.com/go-acme/lego@${lego_version}"
  [packer]="packer.io@${packer_version}"
  [pulumi]="pulumi.io@${pulumi_version}"

  [direnv]="direnv.net@${direnv_version}"
  [fd]="crates.io/fd-find@${fd_version}"
  [freeze]="charm.sh/freeze@${freeze_version}"
  [fx]="fx.wtf@${fx_version}"
  [fzf]="github.com/junegunn/fzf@${fzf_version}"
  [gum]="charm.sh/gum@${gum_version}"
  [jq]="stedolan.github.io/jq@${jq_version}"
  [mise]="mise.jdx.dev${mise_version}"
  [restic]="restic.net/restic@${restic_version}"
  [rg]="crates.io/ripgrep@${rg_version}"
  [shfmt]="mvdan.cc/sh@${shfmt_version}"
  [starship]="starship.rs@${starship_version}"
  [taplo]="taplo.tamasfe.dev@${taplo_version}"
  [vivid]="crates.io/vivid@${vivid_version}"
  [yj]="github.com/sclevine/yj@${yj_version}"
  [yq]="github.com/mikefarah/yq@${yq_version}"
)

declare -ra pkgm_packages_whitelist_array=(
  ${pkgm_packages_whitelist}
)

declare -A pkgm_packages_blacklist_set
for name in $pkgm_packages_blacklist; do
  pkgm_packages_blacklist_set["${name}"]=1
done

for name in "${pkgm_packages_whitelist_array[@]}"; do

  [[ ${pkgm_packages_blacklist_set["${name}"]+_} ]] && continue

  >&2 printf '=== installing "%s"\n' \
    "${name}"
  >&2 printf '=== running "pkgm install %s"\n' \
    "${pkgm_packages[$name]}"
  
  ## note: we use sudo because without it "pkgm" complains as follows:
  ## warning: "warning installing as root; installing via `sudo` is preferred"
  sudo pkgm install \
    "${pkgm_packages[$name]}"

  >&2 printf '=== finished installation of "%s"\n' \
    "${name}"
done

INSTALL_PACKAGES