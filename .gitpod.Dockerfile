FROM  debian:buster

USER  root

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/42_config_docker/
RUN   export debian_frontend=noninteractive && \
      apt-get update && \
      apt-get dist-upgrade -yq && \
      apt-get install -yq curl ca-certificates sudo software-properties-common gnupg2 python2.7 build-essential git apt-transport-https && \
      apt-get autoremove -yq cmdtest && \
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
      echo "deb https://apache.bintray.com/couchdb-deb buster main" | sudo tee -a /etc/apt/sources.list.d/couchdb.list && \
      curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - && \
      apt-get install -yq yarn nodejs couchdb && \
      touch /var/log/couchdb/couchdb.stdout && \
      touch /var/log/couchdb/couchdb.stderr && \
      chmod 777 /var/log/couchdb -R && \
      mkdir -p /var/run/couchdb && \
      chmod 777 /var/run/couchdb -R && \
      sed -i 's_couchdb.stderr_/var/log/couchdb/couchdb.stderr_g' /usr/bin/couchdb && \
      sed -i 's_couchdb.stdout_/var/log/couchdb/couchdb.stdout_g' /usr/bin/couchdb && \
      sed -i 's_BACKGROUND=false_BACKGROUND=true_g' /usr/bin/couchdb && \
      sudo rm -rf /var/lib/apt/lists/*

# install global npm dependencies
RUN   yarn global add ember-cli@latest

CMD   /bin/bash
