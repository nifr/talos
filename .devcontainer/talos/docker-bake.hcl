target "devcontainer" {
  context = "."
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
