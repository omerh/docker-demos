# docker-demos

To run each demo just run
```
docker-compose build
docker-compose up
```

### Demo 1
Running nginx container that reverse proxy by name to a simple node app
This runs 2 separated containers

### Demo 2
Running nginx container that reverse proxy by name to a simple node app that do a counter on page hits using redis
This runs 3 separated containers in a docker network

### Demo 3
Showing the importance of running a process in foreground

### Demo 4
Runnign haproxy loadbalancer that does a host header acl to pass request to simple node apps named A and B
This runs 3 separated containers in a docker network


In case of probemes during build run 
```
docker-compose build --no-cache
docker-compose up
```
