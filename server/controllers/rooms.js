var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.rooms.getAll(results => {
      res.json(results);
    });
  },
  // a function which handles a get request for all messages
  post: function (req, res) {
    let params = { roomname: req.body.roomname };
    models.rooms.create(params, result => {
      res.json(result);
    });
  }
};