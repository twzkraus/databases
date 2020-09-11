var database = require('../db/index.js');

module.exports = {
  getAll: function () {
    var queryString = 'SELECT * FROM users';
    database.dbConnection.connect();
    database.dbConnection.query(queryString, [], function(err, results) {
      if (err) {
        console.error(err);
      } else {
        console.log(results);
        database.dbConnection.end();
      }
    });
  },

  create: function (name) {
    var checkUser = `SELECT userName from users where userName ='${name}'`;
    database.dbConnection.connect();
    database.dbConnection.query(checkUser, [], (err, identicalUsernames) => {
      console.log('IDENTICAL USERNAMES:', identicalUsernames);
      if (err) {
        console.error(err);
      } else if (identicalUsernames.length === 0) {
        var queryStringFirst = 'SELECT max(id) from users';
        database.dbConnection.query(queryStringFirst, [], (err, results) => {
          if (err) {
            console.error(err);
          } else {
            let lastUserId = results[0]['max(id)'];
            var queryString = `INSERT INTO users (userName, id) values ('${name}', ${lastUserId + 1}) `;
            database.dbConnection.query(queryString, [], (err, data) => {
              if (err) {
                console.error(err);
              } else {
                console.log('user added!');
                database.dbConnection.end();
              }
            });
          }
        });
      } else {
        console.log(`The username "${name}" is taken. Please enter a unique username`);
      }
    });
  }
};
