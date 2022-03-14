-- Set up database capstone project
CREATE DATABASE IF NOT EXISTS alasdb;

CREATE USER IF NOT EXISTS 'alas'@localhost
IDENTIFIED BY 'alasdbpwd';

GRANT ALL PRIVILEGES ON alasdb.*
TO 'alas'@localhost;

FLUSH PRIVILEGES;

USE alasdb;

CREATE TABLE IF NOT EXISTS Admin (
    id INT AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Admin(id, email, password)
VALUES('1', 'josepadre30@gmail.com', '$2a$10$wL5NUTxiCK2kB1uRTeTPZeOk193INFW8vcW/Ee/LHZZ40m3hsst4i');

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
