FROM centos:latest

ENV NODE_VERSION 8.11.3

RUN cd \
    \
    && yum -y install epel-release yum-utils \
    && yum-config-manager --enable epel \
    && yum -y update \
    && yum -y upgrade \
    && yum -y install gcc gcc-c++ make wget \
    && yum clean all \
    \
    && groupadd -g 1000 www \
    && adduser -s /sbin/nologin -u 1000 -g 1000 www \
    \
    && wget -c "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && tar xvf "node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && mv "node-v${NODE_VERSION}-linux-x64" /usr/local/node \
    && rm -rf "node-v${NODE_VERSION}-linux-x64.tar.xz" \
    && ln -sf /usr/local/node/bin/node /usr/local/bin/node \
    && ln -sf /usr/local/node/bin/npm /usr/local/bin/npm
    # && echo 'export PATH=/usr/local/node/bin:$PATH' > /etc/profile.d/node.sh \
    # && source /etc/profile.d/node.sh

EXPOSE 80

STOPSIGNAL SIGTERM

VOLUME ["/home/www/app"]
ENTRYPOINT []
CMD ["/usr/local/node/bin/node"]
