FROM centos:latest

ENV NODE_VERSION 8.11.3

RUN curl --compressed -fLO "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && tar xvf "node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && mv "node-v${NODE_VERSION}-linux-x64" /usr/local/node \
    && rm -rf "node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && ln -sf /usr/local/node/bin/node /usr/local/bin/node \
    && ln -sf /usr/local/node/bin/npm /usr/local/bin/npm

# VOLUME []

# ENTRYPOINT []

EXPOSE 80
CMD ["/usr/local/bin/node"]
