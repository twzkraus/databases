var Parse = {

  server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
    $.ajax({
      url: 'http://parse.hrr.hackreactor.com/chatterbox/classes/messages',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to create message', error);
      }
    });
  },

  // key pieces: username, message, room
  /*
    Example message data:
    createdAt: "2020-07-24T04:02:14.890Z"
    objectId: "42rseYOoY4"
    roomname: "SprintRoom"
    text: "testing now"
    updatedAt: "2020-07-24T04:02:14.890Z"
    username: "test"
*/
  readAll: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};