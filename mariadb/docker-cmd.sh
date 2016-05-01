#!/bin/bash

#check permission
if [ `id -u` != '0' ]; then
	echo 'Error: You must be root to run this script'
	exit 1
fi

#mysql_install_db
[ ! -d '/var/lib/mysql/mysql' ] && mysql_install_db --user=mysql

#privileges
if [ ! -e '/root/privileges.sql' ]; then
	sql=/root/privileges.sql
	echo "truncate mysql.user;" > ${sql}
	echo "grant all privileges on *.* to root@localhost identified by '$MYSQL_ROOT_PASSWORD';" >> ${sql}
	echo "grant all privileges on *.* to root@'%' identified by '$MYSQL_ROOT_PASSWORD';" >> ${sql}
	echo "flush privileges;" >> ${sql}
	mysqld_safe --basedir=/usr --user=mysql &
	sleep 5
	mysql -v < ${sql}
	sleep 5
	ps -wef | grep mysql | grep -v grep | awk '{print $2}' | xargs kill -9
fi

mysqld_safe --basedir=/usr --user=mysql