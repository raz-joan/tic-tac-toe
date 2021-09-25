class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedData = JSON.stringify(this.wins);
    window.localStorage.setItem(this.id, stringifiedData);
  }

  retrieveWinsFromStorage() {
    var retrievedData = window.localStorage.getItem(this.id);
    var parsedData = JSON.parse(retrievedData);
    return parsedData;
  }
};
