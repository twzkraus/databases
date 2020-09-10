var FormView = {

  $form: $('form'),
  $addRoom: $('#add-room'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$addRoom.on('click', FormView.addRoom);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let message = {
      roomname: $('#rooms select option:selected')[0].value,
      username: App.username,
      text: $('#message')[0].value
    };
    let fail = () => { console.log('message failed');};
    let pass = () => { console.log('message sent');};
    if ($('#message')[0].value) {
      Parse.create(message, pass, fail);
    }
    // console.log(event.text());
    $('#message')[0].value = '';
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  addRoom: function(event) {
    event.preventDefault();
    console.log('new room hit');
    let message = {
      roomname: $('#newRoomName')[0].value,
    };
    let fail = () => { console.log('message failed');};
    let pass = () => { console.log('message sent');};
    if ($('#message')[0].value) {
      Parse.create(message, pass, fail);
    }
    // console.log(event.text());
    $('#newRoomName')[0].value = '';
  }

};