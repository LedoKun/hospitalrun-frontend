FROM ubuntu:16.04

USER root

ARG DEBIAN_FRONTEND=noninteractive

### base ###
RUN apt-get update && apt-get install -yq \
      zip \
      unzip \
      bash-completion \
      build-essential \
      htop \
      jq \
      less \
      locales \
      man-db \
      nano \
      software-properties-common \
      sudo \
      time \
      vim \
      multitail \
      lsof \
    && locale-gen en_US.UTF-8 \
    && mkdir /var/lib/apt/dazzle-marks \
    && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/*

ENV LANG=en_US.UTF-8

### Git ###
RUN add-apt-repository -y ppa:git-core/ppa \
    && apt-get update \
    && apt-get install -yq git \
    && rm -rf /var/lib/apt/lists/*

### Gitpod user ###
# '-l': see https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user
RUN useradd -l -u 33333 -G sudo -md /home/gitpod -s /bin/bash -p gitpod gitpod \
    # passwordless sudo for users in the 'sudo' group
    && sed -i.bkp -e 's/%sudo\s\+ALL=(ALL\(:ALL\)\?)\s\+ALL/%sudo ALL=NOPASSWD:ALL/g' /etc/sudoers
ENV HOME=/home/gitpod
WORKDIR $HOME
# custom Bash prompt
RUN { echo && echo "PS1='\[\e]0;\u \w\a\]\[\033[01;32m\]\u\[\033[00m\] \[\033[01;34m\]\w\[\033[00m\] \\\$ '" ; } >> .bashrc

### Gitpod user (2) ###
USER gitpod
# use sudo so that user does not get sudo usage info on (the first) login
RUN sudo echo "Running 'sudo' for Gitpod: success" && \
    # create .bashrc.d folder and source it in the bashrc
    mkdir /home/gitpod/.bashrc.d && \
    (echo; echo "for i in \$(ls \$HOME/.bashrc.d/*); do source \$i; done"; echo) >> /home/gitpod/.bashrc

USER root

RUN mkdir -p /home/gitpod/.bashrc.d && \
    chown gitpod: -R /home/gitpod && \
    usermod -aG sudo gitpod

### Yarn Nodejs CouchDB ###
RUN apt-get update && \
    apt-get install -yq --force-yes curl ca-certificates apt-transport-https bash build-essential sudo couchdb && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y nodejs yarn && \
    rm -rf /var/lib/apt/lists/* && \
    chmod 777 -R /etc/couchdb && \
    mkdir -p /var/run/couchdb && \
    chmod 777 -R /var/run/couchdb && \
    chmod 777 -R /var/log/couchdb && \
    sed -i '/\[couchdb\]/a database_dir = /tmp' /etc/couchdb/local.ini && \
    sed -i '/\[couchdb\]/a view_index_dir = /tmp' /etc/couchdb/local.ini && \
    sed -i '/\[log\]/a file = /tmp/couchdb.log' /etc/couchdb/local.ini && \
    sed -i 's/\bbind_address = 127.0.0.1\b/bind_address = 0.0.0.0/g' /etc/couchdb/local.ini && \
    sed -i '/;admin = mysecretpassword/a couchadmin = -pbkdf2-d1a525c0f8e1db42acc04eab98e56ca9ba159202,5ffa3ff6471d4cbda5e444e5e34b1c51,10' /etc/couchdb/local.ini

USER gitpod

# Install custom tools, runtime, etc. using apt-get
# For example, the command below would install "bastet" - a command line tetris clone:
#
# RUN sudo apt-get -q update && #     sudo apt-get install -yq bastet && #     sudo rm -rf /var/lib/apt/lists/*
#
# More information: https://www.gitpod.io/docs/config-docker/
