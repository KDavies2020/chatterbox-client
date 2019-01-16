var Messages = {

  storage: {},
  sorted: [],
  cleanUp: function() {
    for (key in Messages.storage) {
      if (Messages.storage[key].username === undefined || Messages.storage[key].text === undefined) {
        delete Messages.storage[key];
      }
    }
  },

  sortStorage: function() {
    Messages.sorted = Object.values(Messages.storage);
    Messages.sorted.sort((a, b) => Date.parse(a['createdAt']) - Date.parse(b['createdAt']));
  }
};