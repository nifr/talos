target "debian" {
  dockerfile = "debian.Dockerfile"
  context = "."
  args = {
    base_image = "docker.io/library/debian:13-slim"
  }
}

target "pkgx" {
  dockerfile = "pkgx.Dockerfile"
  context = "."
  contexts = {
    "base" = "target:debian"
  }
  args = {
    base_image = "docker.io/library/debian:13-slim"
  }
}

target "pkgx-packages" {
  dockerfile = "pkgx-packages.Dockerfile"
  contexts = {
    "base" = "target:pkgx"
  }
}

target "s6-overlay" {
  dockerfile = "s6-overlay.Dockerfile"
  contexts = {
    "base" = "target:pkgx-packages"
  }
}

target "process-compose" {
  dockerfile = "process-compose.Dockerfile"
  contexts = {
    "base" = "target:s6-overlay"
    "build-context" = "./process-compose"
  }
}

target "docker" {
  dockerfile = "docker.Dockerfile"
  contexts = {
    "base" = "target:process-compose"
    "build-context" = "./docker"
    "source-code" = "https://github.com/docker/mcp-gateway.git#v0.18.0"
  }
}

target "javascript" {
  dockerfile = "javascript.Dockerfile"
  contexts = {
    "base" = "target:docker"
    "npm-config" = "./javascript/npm-config"
  }
}

target "postgres" {
  dockerfile = "postgres.Dockerfile"
  contexts = {
    base = "target:javascript"
    build-context = "./postgres"
  }
}

target "devcontainer" {
  dockerfile = "devcontainer.Dockerfile"
  contexts = {
    base = "target:postgres"
    build-context = "./devcontainer"
  }
}

target "talos" {
  contexts = {
    "base" = "target:devcontainer"
  }
  dockerfile = "talos.Dockerfile"
  args = {
    base_image = "docker.io/library/debian:13-slim"
    BUILDKIT_SYNTAX = "docker/dockerfile:1.17.1-labs"
  }
  no-cache = true
  entitlements = [
    "security.insecure",
  ]
  platforms = [
    notequal("true", platform_amd64) ? "" : "linux/amd64",
    notequal("true", platform_arm64) ? "" : "linux/arm64",
  ]
  labels = {
    "org.opencontainers.image.source" = "https://github.com/nifr/talos"
  }
  tags = [
    "${registry}/${name}:latest",
    "${registry}/${name}:latest-${architecture_tag()}",
    "${registry}/${name}:latest-build-${replace(timestamp(),":",".")}",
  ]
  output = [ 
    "type=docker",
  ]
}

variable "registry" {
  default = "ghcr.io/nifr"
}

variable "CI" {
    default = "false"
}

variable "PWD" {
  default = "$PWD"
}

variable "name" {
  default = basename(PWD)
}

variable "platform_amd64" {
  default = "true"
}

variable "platform_arm64" {
  default = "true"
}

variable "BAKE_LOCAL_PLATFORM" {
  default = "$BAKE_LOCAL_PLATFORM"
}

variable "registry" {
  default = "ghcr.io/nifr"
}

function "is_multiarch" {
  params = []
  result = notequal("true", platform_amd64) ? false : notequal("true", platform_arm64) ? false : true
}

function "architecture" {
  params = []
  result = replace(replace(replace(BAKE_LOCAL_PLATFORM,"linux/",""),"darwin/",""),"/v8","")
}

function "architecture_tag" {
  params = []
  result = is_multiarch() ? "multiarch" : architecture()
}

parameter "architecture_tag" {
  default = architecture_tag()
  description = "The architecture tag to use for the image."
  validation {
    condition = strlen(architecture_tag) > 4
    error_message = "architecture_tag must be longer than 4 characters."
  }
  validation {
    condition = notequal("true", "arm64") ? false : notequal("architecture_tag", "amd64") ? false : notequal("architecture_tag", "multiarch") ? false : true
    error_message = "architecture_tag must be amd64, arm64, or multiarch."
  }
}
