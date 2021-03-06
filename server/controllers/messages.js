var models = require('../models');


module.exports = {
  get: function (req, res) {
    models.messages.getAll(results => {
      res.json(results);
    });
  },
  // a function which handles a get request for all messages
  post: function (req, res) {
    let params = { messageText: req.body.message, roomname: req.body.roomname, username: req.body.username };
    models.messages.create(params, result => {
      res.json(result);
    });
  }
};
