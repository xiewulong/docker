FROM centos:latest

ENV DEFAULT_INSTALLATION_MODE Y
ENV NODE Y
ENV NODE_VERSION 10.15.0

RUN set -ex \
    \
    && curl --compressed -fLs -o deploy-master.tar.gz https://github.com/xiewulong/deploy/archive/master.tar.gz \
    && tar zxvf deploy-master.tar.gz \
    && ./deploy-master/centos.sh \
    && rm -rf deploy-master deploy-master.tar.gz \
    \
    && ln -sf /usr/local/node/bin/node /usr/local/bin/node \
    && ln -sf /usr/local/node/bin/npm /usr/local/bin/npm

CMD [ "/usr/local/bin/node" ]
