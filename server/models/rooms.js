var database = require('../db/index.js');

module.exports = {
  getAll: function () {
    var queryString = 'SELECT * FROM rooms';
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

  create: function (room) {
    var checkRoom = `SELECT roomName from rooms where roomName ='${room}'`;
    database.dbConnection.connect();
    database.dbConnection.query(checkRoom, [], (err, identicalRoomNames) => {
      if (err) {
        console.error(err);
      } else if (identicalRoomNames.length === 0) {
        var queryStringFirst = 'SELECT max(id) from rooms';
        database.dbConnection.query(queryStringFirst, [], (err, results) => {
          if (err) {
            console.error(err);
          } else {
            let lastRoomId = results[0]['max(id)'];
            var queryString = `INSERT INTO rooms (roomName, id) values ('${room}', ${lastRoomId + 1}) `;
            database.dbConnection.query(queryString, [], (err, data) => {
              if (err) {
                console.error(err);
              } else {
                console.log('room added!');
                database.dbConnection.end();
              }
            });
          }
        });
      } else {
        console.log(`The room name "${room}" is taken. Please enter a unique room name.`);
      }
    });
  }
};
