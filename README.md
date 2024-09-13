#Application.

Updates .env File,

curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -

sudo yum install -y nodejs

npm install

node server.js

# DB

mysql -u root -p

CREATE DATABASE saad_db;

USE saad_db;

CREATE USER 'datadog'@'%' IDENTIFIED BY 'yourpassword';

GRANT ALL PRIVILEGES ON saad_db.* TO 'datadog'@'%';

FLUSH PRIVILEGES;

vi /etc/mysql/my.cnf  OR vi /etc/my.cnf

[mysqld]

bind-address = 0.0.0.0

sudo service mysql restart
