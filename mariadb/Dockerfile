FROM centos

MAINTAINER xiewulong <xiewulong@vip.qq.com>

RUN yum -y install http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-6.noarch.rpm && \
	yum -y update && \
	yum -y upgrade && \
	yum -y install hostname mariadb-server && \
	yum clean all

VOLUME /var/lib/mysql

COPY mariadb /

EXPOSE 3306

CMD /mariadb
