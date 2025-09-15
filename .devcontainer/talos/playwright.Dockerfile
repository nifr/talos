# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true

ARG base_image='docker.io/library/debian:13-slim'
FROM "${base_image}" AS base

FROM base

## see: https://playwright.dev/docs/browsers#install-browsers
ENV PLAYWRIGHT_BROWSERS_PATH='/opt/playwright/browsers'
RUN <<'INSTALL_PLAYWRIGHT'
apt-get update

apt-get install \
  -qq \
  --no-install-recommends \
  xdg-utils

install \
  --directory \
  --mode=777 \
  --owner=root \
  --group=root \
    /opt/ \
    /opt/playwright/ \
    /opt/playwright/browsers/

npx playwright \
  install \
    --with-deps \
      chromium
INSTALL_PLAYWRIGHT
