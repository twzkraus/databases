var models = require('../models');

// request({
//   method: 'POST',
//   uri: 'http://127.0.0.1:3000/classes/messages',
//   json: {
//     username: 'Valjean',
//     message: 'In mercy\'s name, three days is all I need.',
//     roomname: 'Hello'
//   }
// }

module.exports = {
  get: function (req, res) {
    models.messages.getAll(results => {
      res.writeHead(200);
      res.write(new Buffer(results));
      res.end();
    });
  },
  // a function which handles a get request for all messages
  post: function (req, res) {
    let body = [];
    let targetData = req.body;
    let date = new Date();
    models.messages.create(targetData.username, targetData.roomname, targetData.message, date, (results) => { console.log('this message was added to db:', results); });
    res.writeHead(200);
    res.end();
  }
};
