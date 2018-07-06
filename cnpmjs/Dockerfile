FROM xiewulong/node:latest

ENV CNPMJS_VERSION 2.19.4

RUN yum -y install gcc gcc-c++ make \
                   mariadb \
    && curl --compressed -fLO "https://github.com/cnpm/cnpmjs.org/archive/${CNPMJS_VERSION}.tar.gz" \
    && tar zxvf "${CNPMJS_VERSION}.tar.gz" \
    && mv "cnpmjs.org-${CNPMJS_VERSION}" /app \
    && rm -rf "${CNPMJS_VERSION}.tar.gz" \
    && cd /app \
    && npm i --build-from-source --disturl=https://npm.taobao.org/mirrors/node --registry=https://registry.npm.taobao.org --unsafe-perm \
    && npm i --disturl=https://npm.taobao.org/mirrors/node --registry=https://registry.npm.taobao.org oss-cnpm


COPY config.js config/
VOLUME ["/app/config/cnpmjs.config.js", "/app/data"]

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 7001 7002
CMD ["/usr/local/bin/node", "/app/dispatch.js"]
