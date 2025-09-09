# check=skip=UndefinedVar,SecretsUsedInArgOrEnv;error=true
ARG base_image='docker.io/library/debian:13-slim'
FROM "${base_image}" AS base

FROM build-context

FROM base
SHELL ["/bin/bash","--noprofile","--norc","-o","nounset","-o","errexit","-o","pipefail","-o","noclobber","-c"]
ARG TARGETARCH

ARG name='postgres'
ARG postgresql_version='17'
ARG build_context_mount_path="/mnt/build-context/${name}"
ARG process_compose_config_target="/opt/process-compose/config/${name}.process-compose.yml"
ARG process_compose_envfile_target="/opt/process-compose/config/${name}.env"
RUN \
  --mount=from=build-context,target=${build_context_mount_path} \
<<'INSTALL_POSTGRES'

echo '=== apt-get update'
apt-get update

echo '=== apt-get install ca-certificates'
apt-get install \
  -qq \
  --no-install-recommends \
    ca-certificates \
    gnupg

echo "=== install /etc/apt/sources.list.d/${name}.sources"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
     {${build_context_mount_path},}/etc/apt/sources.list.d/${name}.sources

echo "=== install /etc/apt/preferences.d/${name}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
      {${build_context_mount_path},}/etc/apt/preferences.d/${name}

echo '=== apt-get update'
apt-get update

echo '=== apt-get install postgresql'
apt-get install \
-qq \
-o 'Debug::pkgProblemResolver=true' \
-o 'Debug::pkgAcquire::Worker=1' \
--no-install-recommends \
--no-install-suggests \
    "postgresql-${postgresql_version:?}" \
    "postgresql-${postgresql_version}-postgis-3" \
    postgis

echo '=== apt-get clean'
apt-get clean

echo '=== rm -rf /var/lib/apt/lists/*'
rm -rf /var/lib/apt/lists/*

printf '=== install folder "%s"\n' \
  '/opt/process-compose/config/'
install \
  --directory \
  --owner='root' \
  --group='root' \
  --mode='755' \
    /opt/ \
    /opt/process-compose/ \
    /opt/process-compose/config/

printf '=== install "%s"\n' \
  '/usr/local/bin/service-postgres'
install \
  --owner='root' \
  --group='root' \
  --mode='755' \
    {${build_context_mount_path},}/usr/local/bin/service-postgres

printf '=== install "%s"\n' \
  '/usr/local/bin/service-postgres-init'
install \
  --owner='root' \
  --group='root' \
  --mode='755' \
    {${build_context_mount_path},}/usr/local/bin/service-postgres-init

printf '=== install "%s"\n' \
  "${process_compose_config_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_config_target}

printf '=== install "%s"\n' \
  "${process_compose_envfile_target}"
install \
  --owner='root' \
  --group='root' \
  --mode='644' \
    {${build_context_mount_path},}${process_compose_envfile_target}

echo "=== Finished installing ${name}."

INSTALL_POSTGRES

ARG PC_CONFIG_FILES="${PC_CONFIG_FILES:-}${PC_CONFIG_FILES:+,}${process_compose_config_target}"
ENV PC_CONFIG_FILES="${PC_CONFIG_FILES}"

ENV PATH="/usr/lib/postgresql/${postgresql_version}/bin:${PATH}"

ENV POSTGRES_USER="postgres"
ENV POSTGRES_PASSWORD="postgres"
ENV POSTGRES_DB="database"

ENV postgresql_user_name="postgres"
ENV postgresql_user_id="510"
ENV postgresql_group_name="postgres"
ENV postgresql_group_id="510"

ENV POSTGRESQL_HOME="/var/run/postgresql"
ENV POSTGRESQL_RUNTIME_DIR="/var/run/postgresql"
ENV POSTGRESQL_CONFIG_DIR="/var/run/postgresql/config"

ENV PGDATA="/var/run/postgresql/data"
ENV POSTGRESQL__data_directory="/var/run/postgresql/data"
ENV POSTGRESQL__external_pid_file="/var/run/postgresql/postgresql.pid"
ENV POSTGRESQL__config_file="/var/run/postgresql/config/postgresql.conf"
ENV POSTGRESQL__hba_file="/var/run/postgresql/config/pg_hba.conf"
ENV POSTGRESQL__ident_file="/var/run/postgresql/config/pg_ident.conf"

ENV POSTGRESQL__unix_socket_directories="/var/run/postgresql"
ENV POSTGRESQL__log_directory="/var/run/postgresql/logs"

ARG _devcontainer_metadata="${_devcontainer_metadata:-[{\}]}"
ENV _devcontainer_metadata_to_add='[{ \
  "customizations": { \
    "vscode": { \
      "extensions": [ \
\
        "ms-ossdata.vscode-pgsql" \
\
      ], \
      "settings": { \
\
        "telemetry.telemetryLevel": "off", \
\
        "pgsql.serverGroups": [ \
          { \
              "name": "PostgreSQL", \
              "id": "3C7A09B6-45F0-4529-99D2-DC1593CE70E6", \
              "isDefault": true \
          } \
        ], \
        "pgsql.connections": [ \
          { \
            "id": "29E52482-8EBA-4A50-A930-2B013C2936B2", \
            "groupId": "3C7A09B6-45F0-4529-99D2-DC1593CE70E6", \
            "authenticationType": "None", \
            "connectTimeout": 15, \
            "applicationName": "vscode-pgsql", \
            "clientEncoding": "utf8", \
            "sslmode": "disable", \
            "server": "127.0.0.1", \
            "expiresOn": 0, \
            "emptyPasswordInput": true, \
            "user": "root", \
            "database": "", \
            "profileName": "postgresql://root@127.0.0.1:5432/", \
            "port": "5432", \
            "hostaddr": "127.0.0.1", \
            "copilotAccessMode": "rw", \
            "password": "", \
            "sshPassword": "" \
          } \
        ], \
        "pgsql.openQueryResultsInTabByDefault": false, \
        "pgsql.openQueryResultsInTabByDefaultDoNotShowPrompt": true, \
        "pgsql.copilot.enable": true, \
        "pgsql.copilot.accessMode": "rw", \
        "pgsql.intelliSense.enableIntelliSense": true, \
        "pgsql.enableQueryHistoryFeature": true, \
        "pgsql.enableQueryHistoryCapture": true, \
        "pgsql.showConnectionStatusLens": true, \
        "pgsql.enableExperimentalFeatures": true \
\
      } \
    } \
  } \
}]'
ENV _devcontainer_metadata="${_devcontainer_metadata%\}]}    },    ${_devcontainer_metadata_to_add#[}"
ENV _devcontainer_metadata_to_add=
LABEL devcontainer.metadata="${_devcontainer_metadata}"
