FROM xiewulong/node:latest

ENV RUBY_MAJOR 2.5
ENV RUBY_VERSION 2.5.1
ENV PASSENGER_VERSION 5.3.3
ENV NGINX_VERSION 1.14.0

RUN set -ex \
		\
    && yum -y install gcc gcc-c++ make \
                      curl-devel gd-devel GeoIP-devel libxslt-devel openssl-devel pcre-devel \
    && yum clean all \
    \
    && curl --compressed -fLO "https://cache.ruby-lang.org/pub/ruby/${RUBY_MAJOR}/ruby-${RUBY_VERSION}.tar.gz" \
    && tar zxvf "ruby-${RUBY_VERSION}.tar.gz" \
    && cd "ruby-${RUBY_VERSION}" \
    && ./configure  --prefix=/usr/local/ruby \
    && make && make install \
    && cd .. \
    && rm -rf "ruby-${RUBY_VERSION}" "ruby-${RUBY_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/ruby/bin:$PATH' > /etc/profile.d/ruby.sh \
    && source /etc/profile.d/ruby.sh \
    \
    && curl --compressed -fLO "http://s3.amazonaws.com/phusion-passenger/releases/passenger-${PASSENGER_VERSION}.tar.gz" \
    && tar zxvf "passenger-${PASSENGER_VERSION}.tar.gz" \
    && mv "passenger-${PASSENGER_VERSION}" /usr/local/passenger \
    && rm -rf "passenger-${PASSENGER_VERSION}.tar.gz" \
    && echo 'export PATH=/usr/local/passenger/bin:$PATH' > /etc/profile.d/passenger.sh \
    && source /etc/profile.d/passenger.sh \
    \
    && curl --compressed -fLO "http://nginx.org/download/nginx-${NGINX_VERSION}.tar.gz" \
    && tar zxvf "nginx-${NGINX_VERSION}.tar.gz" \
    && cd "nginx-${NGINX_VERSION}" \
    && ./configure  --prefix=/usr/local/nginx \
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
    && source /etc/profile.d/nginx.sh


VOLUME ["/app"]

# ENTRYPOINT []

EXPOSE 80
CMD ["/usr/local/nginx/sbin/nginx", "-g", "daemon off;", "-c", "/app/nginx.conf"]
