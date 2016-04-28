FROM centos

MAINTAINER xiewulong <xiewulong@vip.qq.com>

RUN yum -y install http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-6.noarch.rpm && \
	yum -y update && \
	yum -y upgrade

ADD conf/MariaDB.repo /etc/yum.repos.d/MariaDB.repo

RUN yum -y install hostname MariaDB-Galera-server && \
	yum clean all

ADD conf/mariadb /mariadb
RUN chmod +x /mariadb

EXPOSE 3306

CMD ["/mariadb"]
