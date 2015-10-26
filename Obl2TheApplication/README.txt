-- Applikasjon for oblig 4.
-- 
-- Fil med diverse SQL-script brukt til databasen i eksemplet.
-- 
-- Tilkobling: mysql -h localhost -u dat152 --password=jGt3eRf dat152_obl4
--
CREATE DATABASE dat152_obl4;

-- Opprett MySQL-bruker:
CREATE USER dat152@'%';
SET PASSWORD for dat152@'%'=PASSWORD('jGt3eRf');

-- Gi rettigheter til bruker dat152:
GRANT ALTER,ALTER ROUTINE,CREATE,CREATE ROUTINE,CREATE TEMPORARY TABLES,CREATE VIEW,DELETE,
  DROP,EXECUTE,INDEX,INSERT,LOCK TABLES,SELECT,SHOW VIEW,UPDATE ON  dat152_obl4.* TO 'dat152'@'%';

DROP TABLE IF EXISTS history;
DROP TABLE IF EXISTS user;

-- For å opprette tabellen user
CREATE TABLE user (
  username      VARCHAR(50), 
  passhash      VARCHAR(50),
  firstname     VARCHAR(50),
  lastname      VARCHAR(50),
  mobilephone   VARCHAR(20),
  PRIMARY KEY (username, passhash)
) ENGINE=InnoDB;

-- For å opprette tabellen history
CREATE TABLE history (
  datetime      TIMESTAMP, 
  username      VARCHAR(50),
  searchkey     VARCHAR(50),
  PRIMARY KEY (datetime, username),
  FOREIGN KEY (username) REFERENCES user(username)
) ENGINE=InnoDB;

-- For å se at tingene er opprettet OK
DESCRIBE user;
DESCRIBE history;
