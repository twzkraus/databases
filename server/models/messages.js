var database = require('../db/index.js');
var counter = 0;
module.exports = {
  getAll: function () {

    var queryString = 'SELECT * FROM messages';
    database.dbConnection.connect();
    database.dbConnection.query(queryString, [], function(err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log('success!', results);
      }
    });
    // a function which produces all the messages
    // query database/fetch, getting all messages
  },
  // insert into messages (id, userId, dateCreated, roomId, messageText) values (0, 0, '2020-09-09 00:00:01', 0, 'this is a test message');
  create: function (username, roomname, text, date) {
    // a function which can be used to insert a message into the database
    // Example from StackOverflow: 'SELECT * FROM table WHERE id=? LIMIT ?, 5',[ user_id, start ]
    // query db to get userId from username
    database.dbConnection.connect();
    database.dbConnection.query(`SELECT id from names where name=${username}`, [], (err, userId) => {
      if (err) {
        console.error(err);
      } else {
        // query db to get roomId from roomname
        database.dbConnection.query(`SELECT id from rooms where room=${roomname}`, [], (err, roomId) => {
          if (err) {
            console.error(err);
          } else {
            // possibly reformat date
            var queryString = `insert into messages (id, userId, dateCreated, roomId, messageText) values (${counter}, ${userId}, '${date}', ${roomId}, ${text})`;
            database.dbConnection.query(queryString, [], function(err, results) {
              if (err) {
                console.error(err);
              } else {
                counter++;
                console.log('success!', results);
              }
            });
          }
        });
      }
    });
  }
};
