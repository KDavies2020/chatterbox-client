var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      Messages.cleanUp();
      Messages.sortStorage();
      App.stopSpinner();
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
    });

    // handle new room creation
    $('#rooms button').click(function() {
      let newRoomName = $('.addroom').val();
      Rooms.add(newRoomName);
      RoomsView.renderRoom(newRoomName);
      $('.addroom').val('');
    });

    // handle new message submissions
    $('#send > input.submit').click(function() {
      let message = {
        text: $('#message').val(),
        username: App.username,
        roomname: $('#rooms select').val()
      };
      $('#message').val('');
      Parse.create(message);

      App.fetch(function() {
        Messages.cleanUp();
        Messages.sortStorage();
        MessagesView.filterByRoom($('#rooms select').val());
      });
    });
    // when a different room is selected from dropdown, move the user there
    $('#rooms select').change(function() {
      MessagesView.$chats.html('');
      MessagesView.filterByRoom($('#rooms select').val());
    });

    // fetch new messages periodically
    setInterval(function() {
      App.fetch(function() {
        Messages.cleanUp();
        Messages.sortStorage();
        MessagesView.filterByRoom($('#rooms select').val());
      });
    }, 10000);


  },

  fetch: function(callback = () => {}) {
    Parse.readAll((data) => {
      // store the initial data into Messages.storage
      data.results.map((message) => {
        return Messages.storage[message['objectId']] = message;
      });
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