FROM debian:latest

USER root

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/42_config_docker/
RUN export DEBIAN_FRONTEND=noninteractive && \
    apt-get update && \
    apt-get dist-upgrade -qy && \
    apt-get install -qy curl software-properties-common sudo apt-transport-https gnupg ca-certificates && \
    curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - && \
    echo "deb https://apache.bintray.com/couchdb-deb buster main" | sudo tee -a /etc/apt/sources.list.d/couchdb.list && \
    sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 8756C4F765C9AC3CB6B85D62379CE192D401AB61 && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get autoremove -yq cmdtest yarn && \
    apt-get install --no-install-recommends -yq yarn nodejs couchdb && \
    apt-get clean && rm -rf /var/cache/apt/* && rm -rf /var/lib/apt/lists/* && rm -rf /tmp/* && \
    chown -R gitpod /opt/couchdb/data 
