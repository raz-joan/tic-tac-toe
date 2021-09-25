class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    var stringifiedData = JSON.stringify([this.id, this.token, this.wins]);
    window.localStorage.setItem(name, stringifiedData);
  }

  retrieveWinsFromStorage() {
    var retrievedData = window.localStorage.getItem(name);
    var parsedData = JSON.parse(retrievedData);
    return parsedData;
  }
};
