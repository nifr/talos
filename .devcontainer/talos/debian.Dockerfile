# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=false

ARG base_image='docker.io/library/debian:13-slim'
FROM "${base_image}" AS base

FROM base

ARG apt_dependencies=" \
  bash-completion \
  bc \
  bind9-dnsutils \
  binutils \
  busybox \
  bzip2 \
  ca-certificates \
  curl \
  expect \
  file \
  gettext-base \
  gcc \
  gdb \
  git \
  git-absorb \
  git-extras \
  gnupg \
  iproute2 \
  jo \
  kmod \
  less \
  libarchive-tools \
  locales \
  make \
  man-db \
  ncurses-bin \
  ncurses-term \
  net-tools \
  openssh-client \
  openssh-server \
  procps \
  psmisc \
  pv \
  rsync \
  sudo \
  tar \
  util-linux \
  uuid-runtime \
  unzip \
  vim \
  wget \
  xz-utils \
  xdg-utils \
  zip \
  zsh \
"

ARG DEBIAN_FRONTEND='noninteractive'
RUN <<'SETUP'
apt-get update
apt-get install \
  -qq \
  --no-install-recommends \
    ${apt_dependencies}

apt-get clean
rm -rf /var/lib/apt/lists/*
SETUP
