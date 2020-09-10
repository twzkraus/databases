var Friends = {
  storedFriends: {},

  showFriends: function() {
    for (let friend in Friends.storedFriends) {
      $(friend).parent().css('background-color', 'pink');
    }
  }

};