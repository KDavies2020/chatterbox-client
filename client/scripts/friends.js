var Friends = {

  list: {},

  addFriend: function(username) {
    if (Friends.list[username]) {
      delete Friends.list[username];
    } else {
      Friends.list[username] = true;
    }
  },

  styleMyFriend: function() {
    for (var key in Friends.list) {
      $('.' + key).css('background-color', 'salmon')
    }
  }
};