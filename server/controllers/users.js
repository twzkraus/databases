var models = require('../models');
var databaseUsers = require('../models/users.js');

// {
//   method: 'POST',
//   uri: 'http://127.0.0.1:3000/classes/users',
//   json: { username: 'Valjean' }
// }

module.exports = {
  get: function (req, res) {

  },
  post: function (req, res) {
    req.writeHead(200);
    req.on('data', data => {
      console.log(data);
      req.end();
    });
  }
};
