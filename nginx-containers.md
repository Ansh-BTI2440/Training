- docker pull nginx:alpine

- docker run -d --name nginx-demo -p 8080:80 nginx:alpine

- docker rm -f <containerid | container-name>

- docker ps

- docker ps -a

- docker exec -it nginx-demo sh

- open your browser localhost:8080 --> should open nginx website

## docker build

- docker build . -t ansh2440/nginx-demo:v0.1.0

- docker push ansh2440/nginx-demo:v0.1.0

- docker run -d -p 8085:80 --name nginx-demo ansh2440/nginx-demo:v0.1.0

## Docker commands for copy files form host to container

- docker cp . nginx-demo:/usr/share/nginx/html/

- docker exec -it nginx-demo
