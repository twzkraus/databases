CREATE DATABASE chat;

USE chat;


CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT ,
  roomName varchar(255),
  primary key(id)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT ,
  userName varchar(255),
  primary key(id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  userId int NOT NULL AUTO_INCREMENT,
  dateCreated date,
  roomId int NOT NULL AUTO_INCREMENT,
  messageText varchar(255),
  primary key(id),
  foreign key(userId) references users(id),
  foreign key(roomId) references rooms(id)
);


-- DROP DATABASE chat


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

