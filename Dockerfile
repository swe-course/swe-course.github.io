FROM nginx:1.17.6-alpine

COPY ./build/ /usr/share/nginx/html/
