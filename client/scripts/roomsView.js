var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (key in Messages.storage) {
      var roomName = Messages.storage[key].roomname;
      if (roomName && !Rooms[roomName]) {
        Rooms[roomName] = true;
        RoomsView.$select.append('<option value=' + roomName + '>' + roomName + '</option>');
      }
    }
  },

  renderRoom: function(newRoomName) {
    let roomAlreadyExists = false;
    $('#rooms select option').each(function(index, element) {
      if ($(this).val() === newRoomName) {
        roomAlreadyExists = true;
      }
    });

    if (!roomAlreadyExists) {
      $('#rooms select').append('<option value=' + newRoomName + '>' + newRoomName + '</option>')
    }
  }
};
