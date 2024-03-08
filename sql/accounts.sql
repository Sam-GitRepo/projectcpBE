-- create database 
CREATE DATABASE projectcp;

-- use database
USE projectcp;

-- create table statement
CREATE TABLE accounts (
    id INT NOT NULL PRIMARY KEY auto_increment,
     name VARCHAR(255) NOT NULL,
    industry VARCHAR(255),
    website VARCHAR(255),
    address TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- read table accounts
SELECT * FROM accounts;

-- insert into table
INSERT INTO accounts (name, industry, website, address, notes) 
VALUES ('ABC Company', 'Technology', 'www.abc.com', '123 Main St, City, Country', 'Some notes about ABC Company');

-- Select Statement with Condition:
SELECT * FROM accounts WHERE industry = 'Technology';

-- Update Statement with Condition: 
UPDATE accounts SET industry = 'Healthcare' WHERE id = 1;

-- Delete Statement with Condition:
DELETE FROM accounts WHERE industry = 'Technology';

 