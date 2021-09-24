class Player {
  constructor(name, icon) {
    this.id = name;
    this.token = icon;
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
