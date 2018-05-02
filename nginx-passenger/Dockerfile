FROM alpine:latest

ENV RUBY_MAJOR 2.5
ENV RUBY_VERSION 2.5.1
ENV PASSENGER_VERSION 5.2.3
ENV NGINX_VERSION 1.14.0

WORKDIR /root
RUN apk add --no-cache --virtual .build-deps \
            g++ gcc linux-headers make \
            curl-dev gd-dev geoip-dev git libxslt-dev openssl-dev pcre-dev \
    \
    && addgroup -S www
    && adduser -D -S -s /sbin/nologin && -G www www \
    \
    && wget -c "https://cache.ruby-lang.org/pub/ruby/${RUBY_MAJOR}/ruby-${RUBY_VERSION}.tar.gz" \
    && tar zxvf "ruby-${RUBY_VERSION}.tar.gz" \
    && cd "ruby-${RUBY_VERSION}" \
    && ./configure  --prefix=/usr/local/ruby \
    && make && make install \
    && cd .. \
    && rm -rf "ruby-${RUBY_VERSION}" "ruby-${RUBY_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/ruby/bin:$PATH' > /etc/profile.d/ruby.sh \
    && source /etc/profile.d/ruby.sh \
    \
    && wget -c "http://s3.amazonaws.com/phusion-passenger/releases/passenger-${PASSENGER_VERSION}.tar.gz" \
    && tar zxvf "passenger-${PASSENGER_VERSION}.tar.gz" \
    && mv "passenger-${PASSENGER_VERSION}" /usr/local/passenger \
    && rm -rf "passenger-${PASSENGER_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/passenger/bin:$PATH' > /etc/profile.d/passenger.sh \
    && source /etc/profile.d/passenger.sh \
    \
    && wget -c "http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz" \
    && tar zxvf "nginx-${NGINX_VERSION}.tar.gz" \
    && cd "nginx-${NGINX_VERSION}" \
    && ./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_gzip_static_module --with-http_image_filter_module=dynamic --with-http_ssl_module --with-http_stub_status_module --with-http_xslt_module=dynamic --with-mail=dynamic --with-stream=dynamic --with-compat --add-dynamic-module=`/usr/local/passenger/bin/passenger-config --nginx-addon-dir` \
    && make && make install \
    && cd .. \
    && rm -rf "nginx-${NGINX_VERSION}" "nginx-${NGINX_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/nginx/sbin:$PATH' > /etc/profile.d/nginx.sh \
    && source /etc/profile.d/nginx.sh \
    \
    && mkdir /home/www/app \
    && cd /home/www \
    && git clone https://github.com/xiewulong/nginx.git

ENV APP_PORT 3000
EXPOSE 3000

VOLUME ["/home/www/app", "/home/www/nginx/conf/nginx.conf", "/home/www/nginx/vhost.conf"]
ENTRYPOINT ["/usr/local/nginx/sbin/nginx"]
CMD ["-p", "/home/www/nginx"]
