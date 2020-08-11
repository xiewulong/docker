FROM ruby:alpine

RUN set -ex && \
    apk add --no-cache \
      build-base \
      nodejs \
      sqlite-dev \
      yarn \
    && \
    gem install rails
