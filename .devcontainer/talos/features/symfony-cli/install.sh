#!/usr/bin/env -S bash --noprofile --norc -o errexit -o pipefail -o noclobber -o nounset -o allexport
readonly featureName="symfony-cli"

readonly TARGETARCH="$(dpkg --print-architecture)"
readonly DEBIAN_FRONTEND=noninteractive

readonly githubRepository='symfony-cli/symfony-cli'
readonly name="symfony-cli"
readonly architecture="${TARGETARCH}"
version="${VERSION:-5.12.0}"
downloadUrl="https://github.com/${githubRepository}/releases/download/v${version}/symfony-cli_linux_${TARGETARCH}.tar.gz"

readonly binaryName='symfony'
readonly binaryTargetFolder='/usr/local/bin'
readonly binaryTargetPath='/usr/local/bin/symfony'
readonly versionArgument='--version'

# Install dependencies -->
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
# <-- Install dependencies

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

printf '=== Download "%s" and extract "%s"\n' \
  "${downloadUrl}" \
  "${binaryTargetPath}"
curl \
    -sLo- \
    "${downloadUrl}" \
    | tar -xz -C ${binaryTargetFolder} symfony

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