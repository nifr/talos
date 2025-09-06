#!/usr/bin/env -S bash --noprofile --norc -o errexit -o pipefail -o nounset

## see:     https://github.com/siderolabs/talos/releases
## example: https://github.com/siderolabs/talos/releases/download/v1.12.0-alpha.0/talosctl-linux-arm64

# readonly talosctl_version="${VERSION:-1.11.0}"

#!/usr/bin/env -S bash --noprofile --norc -o errexit -o pipefail -o noclobber -o nounset -o allexport

readonly featureName='talosctl'

readonly TARGETARCH="$(dpkg --print-architecture)"
readonly DEBIAN_FRONTEND='noninteractive'

readonly githubRepository='siderolabs/talos'
readonly name="talosctl"
readonly architecture="${TARGETARCH}"
version="${VERSION:-1.11.0}"
# caution: downloadUrlTemplate is in single quotes as variables are replaced later with "envsubst" !
readonly downloadUrl="https://github.com/${githubRepository}/releases/download/v${version}/${name}-linux-${architecture}"
readonly binaryName='talosctl'
readonly binaryTargetFolder='/usr/local/bin'
readonly binaryTargetPath='/usr/local/bin/talosctl'
readonly versionArgument='version'

# if ! [[ "${VERSION:-}" =~ ^(latest|[0-9]+\.[0-9]+\.[0-9]+)$ ]]; then
#   >&2 printf '=== [ERROR] Option "version" (value: "%s") is not "latest" or valid semantic version format "X.Y.Z" !\n' \
#     "${VERSION}"
#   exit 1
# fi

declare -a requiredAptPackagesMissing=()

if ! [ -r '/etc/ssl/certs/ca-certificates.crt' ]; then
  requiredAptPackagesMissing+=('ca-certificates')
fi

if ! command -v curl >/dev/null 2>&1; then
  requiredAptPackagesMissing+=('curl')
fi

if ! command -v envsubst >/dev/null 2>&1; then
  requiredAptPackagesMissing+=('gettext-base')
fi

if ! command -v file >/dev/null 2>&1; then
  requiredAptPackagesMissing+=('file')
fi

if [ "${VERSION}" == 'latest' ] && ! command -v jq >/dev/null 2>&1; then
  requiredAptPackagesMissing+=('jq')
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

if [ "${VERSION}" == 'latest' ] || [ -z "${VERSION}" ]; then
  printf '=== Given option "version" is "latest" or empty string ""\n'

  readonly latestVersionGitHubUrl="https://api.github.com/repos/${githubRepository}/releases/latest"
  >&2 printf '=== Get version of latest release from GitHub API at "%s"\n' \
    "${latestVersionGitHubUrl}"
  readonly latestVersionResolvedFromGitHub=$(
    curl \
      --silent \
      --fail \
      --show-error \
       -H "${GITHUB_TOKEN:+"Authorization: token "}${GITHUB_TOKEN:-}" \
        "${latestVersionGitHubUrl}" \
    | jq -r '.tag_name | capture("(?<version>([0-9]+\\.[0-9]+\\.[0-9]+))").version' \
    || true
  )

  if [ -z "${latestVersionResolvedFromGitHub}" ]; then
    >&2 printf '=== [ERROR] Failed to retrieve latest version from URL "%s"!\n' \
      "${latestVersionGitHubUrl}"
    exit 1
  fi

  VERSION="${latestVersionResolvedFromGitHub}"
fi

readonly version="${VERSION:?}"

# readonly downloadUrl="$(echo -n "${downloadUrlTemplate}" | envsubst)"
printf '=== Test if download URL "%s" is valid\n' \
  "${downloadUrl}"
curl \
  --silent \
  --location \
  --head \
  --fail \
  --fail-early \
  --show-error \
  --output '/dev/null' \
    "${downloadUrl}"

# readonly binaryTargetPath="$(echo -n "${binaryTargetPathTemplate}" | envsubst)"
printf '=== Download binary from URL "%s" \n' \
  "${downloadUrl}"
curl \
  --silent \
  --location \
  --output "${binaryTargetPath}" \
    "${downloadUrl}"

printf '=== Set 755 permissions for downloaded binary "%s"\n' \
  "${binaryTargetPath}"
chmod 755 \
  "${binaryTargetPath}"

printf '=== Active "%s" is now "%s"\n' \
  "${binaryName}" \
  "$(which "${binaryName}")"

"${binaryName}" "${versionArgument}" || true
file "${binaryTargetPath}"
# note: ldd exits with exit code 1 if binary is "statically linked" / "not a dynamic executable"
ldd "${binaryTargetPath}" || true
du -hd0 "$(which "${binaryTargetPath}")"

printf '=== [Success] Feature "%s" installed.\n\n' \
  "${featureName}"
