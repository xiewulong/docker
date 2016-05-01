grant all privileges on *.* to root@localhost identified by '$MYSQL_PASSWORD';
grant all privileges on *.* to root@'%' identified by '$MYSQL_PASSWORD';
flush privileges;
