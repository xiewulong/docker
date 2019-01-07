#!/bin/bash
set -e

MYSQL="mysql --host=$DATABASE_HOST --port=$DATABASE_PORT --user=$DATABASE_USERNAME --password=$DATABASE_PASSWORD"
if [ -z `$MYSQL -e 'SHOW DATABASES;' | grep -o "^$DATABASE_DB$"` ]; then
  $MYSQL -e "CREATE DATABASE $DATABASE_DB;USE $DATABASE_DB;SOURCE /app/docs/db.sql;"
fi

$@
