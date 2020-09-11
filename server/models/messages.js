var database = require('../db/index.js');
var users = require('./users.js');
var rooms = require('./rooms.js');
module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM messages';
    database.dbConnection.query(queryString, [], function(err, results) {
      if (err) {
        console.error(err);
      } else {
        callback(results);
      }
    });
  },
  create: function (params, callback) {
    var args = [ params.messageText, params.username, params.roomname ];
    var queryString = 'INSERT INTO messages (messageText, userId, roomname) values (?, (select id from users where username = ? limit 1), ?)';
    database.dbConnection.query(queryString, args, (err, results) => {
      if (err) {
        console.error(err);
      } else {
        callback(results);
      }
    });
  }
};

