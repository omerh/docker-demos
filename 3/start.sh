#!/bin/bash

echo "showing a startup script"

for i in {0..100}; do
	echo $i
done

apt-get update
apt-get install nginx -y

echo "Runnging nginx in foreground"
nginx -g 'daemon off;'