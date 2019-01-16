var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    for (var i = 0; i < Messages.sorted.length; i++) {
      var key = Messages.sorted[i].objectId;
      let message = Messages.storage[key];
      MessagesView.renderMessage(message);
    }
  },

  renderMessage: function(message) {
    // Add message to DOM
    let id = '#' + message['objectId'];
    if ($(id).length === 0) {
      MessagesView.$chats.prepend(MessageView.render(message));
      // Add click handler to DOM to manage friends
      $(id).click(function() {
        let userName = $(this).find('.username').text().trim();
        Friends.addFriend(userName);
        Friends.styleMyFriend(userName);
      });
    }
  },

  filterByRoom: function(roomName) {
    for (var i = 0; i < Messages.sorted.length; i++) {
      var key = Messages.sorted[i].objectId;
      let message = Messages.storage[key];
      if (Messages.storage[key].roomname === roomName) {
        MessagesView.renderMessage(message);
      }
    }
  }

};