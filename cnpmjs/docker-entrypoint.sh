#!/bin/bash

echo 'Hello world' >> '/app/config/test.out'
ls -l /app/config
cat /app/config/test.out

echo $DATABASE_DIALECT
echo $DATABASE_POOL_MAX_CONNECTIONS
echo $DATABASE_POOL_MIN_CONNECTIONS
echo $DATABASE_POOL_MAX_IDLE_TIME
echo $DATABASE_HOST
echo $DATABASE_PORT
echo $DATABASE_USERNAME
echo $DATABASE_PASSWORD
echo $DATABASE_DB
