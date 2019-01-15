var Messages = {

  storage: {},

  cleanUp: function() {
    for(key in Messages.storage) {
      if(Messages.storage[key].username === undefined) {
        delete Messages.storage[key];
      }
    }
  }
};