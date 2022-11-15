#!/bin/sh

docker build -t padcom/mapbox-supercluster-server .
docker push padcom/mapbox-supercluster-server
docker run --rm -it -p 9009:9009 mapbox-supercluster-server
