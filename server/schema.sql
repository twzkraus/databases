DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;


CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT ,
  roomname varchar(255),
  primary key(id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT ,
  username varchar(255),
  primary key(id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL,
  roomname varchar(255),
  messageText varchar(255),
  primary key(id),
  foreign key(userId) references users(id)
);


-- DROP DATABASE chat


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

