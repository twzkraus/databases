var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
    MessagesView.$chats.on('click', MessagesView.addFriend);
  },

  render: function() {
    MessagesView.$chats.html('');
    console.log('rendering messages', Messages.storedMessages);
    for (let i = 0; i < Messages.storedMessages.length; i++) {
      let thisMessage = Messages.storedMessages[i];

      if (thisMessage.roomname) {
        if (thisMessage.roomname.split(' ').join('-') === $('#rooms select option:selected')[0].value) {
          MessagesView.$chats.append(MessageView.render(thisMessage));
        }
      }
    }
    Friends.showFriends();
  },

  addFriend: function(event) {
    console.log('youve activated addFriend');
    let classList = event.target.className.split(' ');
    classList.forEach((thisClass) => {
      if (thisClass.slice(0, 2) === 'u-') {
        Friends.storedFriends['.' + thisClass] = '.' + thisClass;
      }
    });
    // trigger friends.showFriends to highlight friends
    Friends.showFriends();
  }
};
