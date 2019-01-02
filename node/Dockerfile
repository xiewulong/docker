FROM centos:latest

ENV DEFAULT_INSTALLATION_MODE Y
ENV COMMON_LIBRARY Y
ENV NODE Y
ENV NODE_VERSION 10.15.0

RUN set -ex \
    \
    && curl --compressed -fLs -odeploy-master.tar.gz "https://github.com/xiewulong/deploy/archive/master.tar.gz" \
    && tar zxvf deploy-master.tar.gz \
    && ./deploy-master/centos.sh
    # \
    # && curl --compressed -fLO "https://nodejs.org/dist/v${NODE_VERSION}/node-v$NODE_VERSION-linux-x64.tar.xz" \
    # && tar xvf "node-v$NODE_VERSION-linux-x64.tar.xz" \
    # && mv "node-v$NODE_VERSION-linux-x64" /usr/local/node \
    # && rm -rf "node-v$NODE_VERSION-linux-x64.tar.xz" \
    # && ln -sf /usr/local/node/bin/node /usr/local/bin/node \
    # && ln -sf /usr/local/node/bin/npm /usr/local/bin/npm

# VOLUME []

# ENTRYPOINT []

CMD [ "/usr/local/bin/node" ]
