FROM centos

MAINTAINER xiewulong <xiewulong@vip.qq.com>

RUN yum install -y http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-5.noarch.rpm && \
	yum update -y && \
	yum upgrade -y

ADD conf/MariaDB.repo /etc/yum.repos.d/MariaDB.repo

RUN yum install -y hostname MariaDB-Galera-server && \
	yum clean all

ADD conf/mariadb /mariadb
RUN chmod +x /mariadb

EXPOSE 3306

CMD ["/mariadb"]
