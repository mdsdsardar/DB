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

GRANT PROCESS ON *.* TO datadog@'%';

GRANT SELECT ON performance_schema.* TO datadog@'%';

CREATE SCHEMA IF NOT EXISTS datadog;

GRANT EXECUTE ON datadog.* to datadog@'%';

GRANT CREATE TEMPORARY TABLES ON datadog.* TO datadog@'%';

vi /home/ec2-user/datadog_procedure.sql

DELIMITER $$
CREATE PROCEDURE datadog.explain_statement(IN query TEXT)
    SQL SECURITY DEFINER
BEGIN
    SET @explain := CONCAT('EXPLAIN FORMAT=json ', query);
    PREPARE stmt FROM @explain;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
END $$
DELIMITER ;

source /home/ec2-user/datadog_procedure.sql;

GRANT EXECUTE ON PROCEDURE datadog.explain_statement TO datadog@'%';

vi  /home/ec2-user/performance_schema.sql

DELIMITER $$
CREATE PROCEDURE datadog.enable_events_statements_consumers()
    SQL SECURITY DEFINER
BEGIN
    UPDATE performance_schema.setup_consumers SET enabled='YES' WHERE name LIKE 'events_statements_%';
    UPDATE performance_schema.setup_consumers SET enabled='YES' WHERE name = 'events_waits_current';
END $$
DELIMITER ;

source /home/ec2-user/performance_schema.sql;

GRANT EXECUTE ON PROCEDURE datadog.enable_events_statements_consumers TO datadog@'%';

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

vi /etc/datadog-agent/datadog.yaml

Uncomment these 2 lines.
apm_config: 
enabled: true

vi /etc/datadog-agent/conf.d/mysql.d/conf.yaml

init_config:
instances:
  - dbm: true
    host: 127.0.0.1    
    port: 3306    
    username: datadog    
    password: 'yourpassword'

