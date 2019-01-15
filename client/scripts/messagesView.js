var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //MessagesView.$chats.ready((event) => console.log('click!'));
    for (var key in Messages.storage) {
     //console.log(Messages.storage[key])
     let message = Messages.storage[key];
     MessagesView.$chats.prepend(MessageView.render(message));
    }

    // Messages.storage.forEach((messageKey) => {
    //   Messageview.render(Messages.storage[messageKey]);
    //   console.log(Messages.storage[messageKey]);
    // });
  },

  renderMessage: function(message) {
    messages = Parse.readAll(data => data);
    MessagesView.$chats.append(`<div class = message> ${message.text} </div>` )
  }

};