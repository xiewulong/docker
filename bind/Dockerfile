FROM alpine:latest

RUN set -ex \
    \
    && apk add --no-cache --virtual .build-deps bind

EXPOSE 53 53/udp

VOLUME [ "/var/bind" ]

CMD [ "/usr/sbin/named", "-g" ]

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT [ "docker-entrypoint.sh" ]
