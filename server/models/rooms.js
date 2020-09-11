var database = require('../db/index.js');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM rooms';
    database.dbConnection.query(queryString, [], function(err, results) {
      if (err) {
        console.error(err);
      } else {
        callback(results);
      }
    });
  },

  create: function (params, callback) {
    var args = [ params.roomname ];
    var queryString = `insert into users (roomname) values (?)`;
    database.dbConnection.query(queryString, args, (err, results) => {
      if (err) {
        console.error(err);
      }
      callback(results);
    });
  }
};
