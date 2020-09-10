-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int,
  userId int,
  dateCreated date,
  roomId int,
  messageText varchar(255),
  primary key(id)
);

CREATE TABLE rooms (
  id int,
  roomName varchar(255),
  primary key(id)
);

CREATE TABLE users (
  id int,
  userName varchar(255),
  primary key(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

