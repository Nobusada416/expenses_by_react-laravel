FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=laravel \
    MYSQL_USER=root \
    MYSQL_PASSWORD=root \
    MYSQL_ROOT_PASSWORD=root \
    TZ=Asia/Tokyo

COPY ./my.conf /etc/my.conf
RUN chmod 644 /etc/my.conf
