var dbConnection = require('../db/index.js');

module.exports = {
  getAll: function () {

    var queryString = 'SELECT * FROM messages';
    dbConnection.query(queryString, [], function(err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log('success!', results);
      }
    });
    // a function which produces all the messages
    // query database/fetch, getting all messages
  },
  create: function () {
    // a function which can be used to insert a message into the database
  }
};
