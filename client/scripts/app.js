var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = decodeURI(window.location.search.substr(10));
    App.startSpinner();
    App.fetch(function() {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    });
    // Fetch initial batch of messages
    setInterval(function() {
      App.fetch(function() {
        RoomsView.render();
        MessagesView.render();
      });
    }, 5000);
  },

  // Figure out what callback does
  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      Messages.storedMessages = data.results;

      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname) {
          Rooms.storedRooms[data.results[i].roomname] = data.results[i].roomname;
        }
        // Rooms.storedRooms[datum.roomname] = datum.roomname;
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
