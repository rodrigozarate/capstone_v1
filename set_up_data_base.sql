-- Set up database capstone project
CREATE DATABASE IF NOT EXISTS alasdb;

CREATE USER IF NOT EXISTS 'alas'@localhost
IDENTIFIED BY 'alasdbpwd';

GRANT ALL PRIVILEGES ON alasdb.*
TO 'alas'@localhost;

FLUSH PRIVILEGES;

USE alasdb;

CREATE TABLE IF NOT EXISTS Route (
    id INT AUTO_INCREMENT,
    path VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Subscription(
    id INT AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS SubscriptionRoute (
    subscription_id INT NOT NULL,
    route_id INT NOT NULL,
    PRIMARY KEY (subscription_id, route_id),
    FOREIGN KEY (subscription_id) REFERENCES Subscription(id),
    FOREIGN KEY (route_id) REFERENCES Route(id)
);

CREATE TABLE IF NOT EXISTS User(
    id INT AUTO_INCREMENT UNIQUE,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    subscription_id INT,
    company VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY(subscription_id) REFERENCES Subscription(id)
);

