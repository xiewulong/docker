FROM centos

MAINTAINER xiewulong <xiewulong@vip.qq.com>

RUN yum -y install pptpd && \
	yum clean all

COPY pptpd.conf    /etc/
COPY chap-secrets  /etc/ppp/
COPY pptpd-options /etc/ppp/

EXPOSE 1723

CMD pptpd --fg
