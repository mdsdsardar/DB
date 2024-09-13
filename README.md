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

CREATE TABLE mytable (id INT AUTO_INCREMENT PRIMARY KEY, `key` VARCHAR(255) NOT NULL, `value` VARCHAR(255) NOT NULL);

INSERT INTO mytable (`key`, `value`) VALUES ('22', '44');

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

DataDog Installation:

dnf install -y libxcrypt-compat

DD_API_KEY=Secret_key DD_SITE="us5.datadoghq.com" bash -c "$(curl -L https://install.datadoghq.com/scripts/install_script_agent7.sh)"

systemctl start datadog-agent

