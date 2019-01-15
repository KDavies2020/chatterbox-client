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

    $('.addRoom').click(function() { RoomsView.renderRoom() });


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
