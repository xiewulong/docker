FROM alpine:latest

ENV RUBY_MAJOR 2.5
ENV RUBY_VERSION 2.5.1
ENV PASSENGER_VERSION 5.2.3
ENV NGINX_VERSION 1.14.0
ENV NODE_VERSION 8.11.1

RUN apk add --no-cache --virtual .build-deps \
            curl g++ gcc gnupg linux-headers make python \
            curl-dev gd-dev geoip-dev git libxslt-dev openssl-dev pcre-dev \
    # && apk del .build-deps \
    \
    && cd \
    && addgroup -S www \
    && adduser -D -S -s /sbin/nologin -G www www \
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
    && ./configure  --prefix=/usr/local/nginx \
                    --user=www \
                    --group=www \
                    --with-http_ssl_module \
                    --with-http_realip_module \
                    --with-http_addition_module \
                    --with-http_sub_module \
                    --with-http_dav_module \
                    --with-http_flv_module \
                    --with-http_mp4_module \
                    --with-http_gunzip_module \
                    --with-http_gzip_static_module \
                    --with-http_random_index_module \
                    --with-http_secure_link_module \
                    --with-http_stub_status_module \
                    --with-http_auth_request_module \
                    --with-http_xslt_module=dynamic \
                    --with-http_image_filter_module=dynamic \
                    --with-http_geoip_module=dynamic \
                    --with-threads \
                    --with-stream \
                    --with-stream_ssl_module \
                    --with-stream_ssl_preread_module \
                    --with-stream_realip_module \
                    --with-stream_geoip_module=dynamic \
                    --with-http_slice_module \
                    --with-mail \
                    --with-mail_ssl_module \
                    --with-compat \
                    --with-file-aio \
                    --with-http_v2_module \
                    --add-dynamic-module=`/usr/local/passenger/bin/passenger-config --nginx-addon-dir` \
    && make && make install \
    && cd .. \
    && rm -rf "nginx-${NGINX_VERSION}" "nginx-${NGINX_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/nginx/sbin:$PATH' > /etc/profile.d/nginx.sh \
    && source /etc/profile.d/nginx.sh \
    \
    && wget -c "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.tar.gz" \
    && tar zxvf "node-v${NODE_VERSION}.tar.gz" \
    && cd "node-v${NODE_VERSION}" \
    && ./configure --prefix=/usr/local/node \
    && make && make install \
    && cd .. \
    && rm -rf "node-v${NODE_VERSION}" "node-v${NODE_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/node/bin:$PATH' > /etc/profile.d/node.sh \
    && source /etc/profile.d/node.sh \
    \
    && git clone https://github.com/xiewulong/nginx.git /home/www/nginx \
    && cp /home/www/nginx/conf/nginx.conf.sample /home/www/nginx/conf/nginx.conf \
    && cp /home/www/nginx/vhost.conf.sample /home/www/nginx/vhost.conf \
    && mkdir /home/www/app \
    && chown www:www -R /home/www

ENV APP_PORT 3000
EXPOSE 3000

VOLUME ["/home/www/app", "/home/www/nginx/conf/nginx.conf", "/home/www/nginx/vhost.conf"]
ENTRYPOINT ["/usr/local/nginx/sbin/nginx"]
CMD ["-p", "/home/www/nginx"]
