var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    for (var key in Messages.storage) {
      var roomName = Messages.storage[key].roomname;
      if (roomName && !Rooms[roomName]) {
        Rooms[roomName] = true;
        RoomsView.$select.append('<option value=' + roomName.substring(0,16) + '>' + roomName.substring(0,16) + '</option>');
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
      $('#rooms select').append('<option value=' + newRoomName.substring(0,16) + '>' + newRoomName.substring(0,16) + '</option>')
    }
  }

};
