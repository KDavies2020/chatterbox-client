var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      Messages.cleanUp();
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
        roomName: $('#rooms select').val()
      }
      $('#message').val('')
      Parse.create(message)
     });

    // fetch new messages periodically
    setInterval(function() {
       App.fetch(function() {
        Messages.cleanUp();
        MessagesView.initialize();
      })
     }, 250);
  },

  fetch: function(callback = ()=>{}) {
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
