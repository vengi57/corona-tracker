FROM nginx
RUN ["apt-get", "update"]
RUN ["apt-get", "install", "-y", "vim"]
COPY build /build
COPY nginx.conf /etc/nginx/conf.d/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf