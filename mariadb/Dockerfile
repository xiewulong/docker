FROM centos

MAINTAINER xiewulong <xiewulong@vip.qq.com>

RUN yum -y install http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-7.noarch.rpm && \
	yum -y update && \
	yum -y upgrade && \
	yum -y install mariadb-server && \
	yum clean all

COPY docker-cmd.sh /
RUN chmod +x /docker-cmd.sh

EXPOSE 3306

CMD /docker-cmd.sh
