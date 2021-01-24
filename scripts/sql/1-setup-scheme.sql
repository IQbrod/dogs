create database if not exists SCHEME;
create user if not exists 'USERNAME'@'localhost' identified by 'PASSWORD';
alter user 'USERNAME'@'localhost' identified with mysql_native_password BY 'PASSWORD';
grant all privileges on SCHEME.* TO 'USERNAME'@'localhost';