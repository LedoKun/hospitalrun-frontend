FROM debian:buster

USER root

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/42_config_docker/
RUN   export debian_frontend=noninteractive && \
      apt-get update && \
      apt-get dist-upgrade -yq && \
      apt-get install -yq curl ca-certificates sudo software-properties-common && \
      apt-get autoremove -yq cmdtest && \
      curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
      echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
      curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - && \
      apt-get install -yq yarn nodejs

# install global npm dependencies
RUN yarn global add ember-cli@latest

CMD /bin/bash
