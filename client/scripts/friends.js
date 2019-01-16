var Friends = {

  list: {},

  addFriend: function(username) {
    if (Friends.list[username]) {
      delete Friends.list[username];
    } else {
      Friends.list[username] = true;
    }
  },

  styleMyFriend: function(userName) {
    // handling weird characters in named
    if (userName.includes('%20')) {
      var userName = userName.split('%20').join('');
    }

    console.log(Friends.list[userName]);
    // toggle styles on and off
    if (Friends.list[userName]) {
      $('.' + userName).css('background-color', 'salmon');
    } else {
      $('.' + userName).css('background-color', '');
    }
  }
};