FROM nginx:1.15.2-alpine

RUN rm -rf /etc/nginx/conf.d
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html/
