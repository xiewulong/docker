FROM centos

MAINTAINER xiewulong <xiewulong@vip.qq.com>

RUN yum -y install http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-6.noarch.rpm && \
	yum -y update && \
	yum -y upgrade
	yum -y install pptpd && \
	yum clean all

COPY pptpd.conf    /etc/
COPY chap-secrets  /etc/ppp/
COPY pptpd-options /etc/ppp/

EXPOSE 1723

CMD pptpd --fg
