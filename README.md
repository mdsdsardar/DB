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

performance_schema = ON

max_digest_length = 4096

performance_schema_max_digest_length = 4096

performance-schema-consumer-events-statements-current = ON

performance-schema-consumer-events-waits-current = ON

performance-schema-consumer-events-statements-history-long = ON

performance-schema-consumer-events-statements-history = ON

sudo service mysql restart
