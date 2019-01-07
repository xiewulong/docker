FROM xiewulong/node:latest

ENV DEFAULT_INSTALLATION_MODE Y
ENV COMMON_LIBRARY Y
ENV NGINX Y
ENV NGINX_VERSION 1.14.2
ENV NGINX_WITH_PASSENGER Y
ENV PASSENGER_VERSION 6.0.0
ENV RUBY_VERSION 2.6.0

RUN set -ex \
    \
    && curl --compressed -fLs -o deploy-master.tar.gz https://github.com/xiewulong/deploy/archive/master.tar.gz \
    && tar zxvf deploy-master.tar.gz \
    && ./deploy-master/centos.sh \
    && rm -rf deploy-master deploy-master.tar.gz

EXPOSE 80

WORKDIR /app

CMD [ "/usr/local/nginx/sbin/nginx", "-c", "/app/nginx.conf", "-g", "daemon off;" ]
