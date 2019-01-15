var Rooms = {

  add: function(newRoomName) {
    if (!Rooms[newRoomName]) {
      Rooms[newRoomName] = true;
    }
  }
};