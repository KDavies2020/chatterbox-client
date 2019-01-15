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

  renderRoom: function() {

      let newRoomName = $('.addroom').val();
      console.log(newRoomName);

      if (!Rooms[newRoomName]) {
        RoomsView.$select.append('<option value=' + newRoomName + '>' + newRoomName + '</option>')
      }
      $('.addroom').val('');
    }
};
