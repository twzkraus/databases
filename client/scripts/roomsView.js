var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.render();
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  // handleChange
  handleChange: function(event) {
    // apply event onto rooms select
    MessagesView.render();
    // hide all currently rendered messages
    // if hasClasshidden === false, add class hidden
    // go back through and show the messages corresponding to selected value
    // if data-roomname === newly selected roomname, remove class hidden
  },

  render: function() {
    RoomsView.$select.html('');
    for (let room in Rooms.storedRooms) {
      RoomsView.$select.append(RoomView.render({'room': room}));
    }
  }

};


    /*
    Example message data:
    createdAt: "2020-07-24T04:02:14.890Z"
    objectId: "42rseYOoY4"
    roomname: "SprintRoom"
    text: "testing now"
    updatedAt: "2020-07-24T04:02:14.890Z"
    username: "test"
*/


