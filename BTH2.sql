Create database KTHDV;
use KTHDV;

CREATE TABLE User (
    IdUser INT AUTO_INCREMENT PRIMARY KEY,
    UserName VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Token VARCHAR(255)
);

INSERT INTO User (UserName, Password) 
VALUES ('admin', MD5('123456'));