FROM centos:latest

ENV DEFAULT_INSTALLATION_MODE Y
ENV COMMON_LIBRARY Y
ENV BIND Y
ENV BIND_VERSION 9.11.5-P1

RUN set -ex \
    \
    && curl --compressed -fLs -o deploy-master.tar.gz https://github.com/xiewulong/deploy/archive/master.tar.gz \
    && tar zxvf deploy-master.tar.gz \
    && ./deploy-master/centos.sh \
    && rm -rf deploy-master deploy-master.tar.gz

COPY named.conf /etc/

# VOLUME []

# ENTRYPOINT []

EXPOSE 53
CMD [ "/usr/local/bind/sbin/named", "-c", "/etc/named.conf", "-g", "-p", "53" ]
