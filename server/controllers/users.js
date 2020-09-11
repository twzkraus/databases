var models = require('../models');

// {
//   method: 'POST',
//   uri: 'http://127.0.0.1:3000/classes/users',
//   json: { username: 'Valjean' }
// }

module.exports = {
  get: function (req, res) {
    models.users.getAll(results => {
      res.json(results);
    });
  },
  // a function which handles a get request for all messages
  post: function (req, res) {
    let params = { username: req.body.username };
    models.users.create(params, result => {
      res.json(result);
    });
  }
};