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
    var retrievedWins = window.localStorage.getItem(this.id);
    var parsedWins = JSON.parse(retrievedWins);
    this.wins = parsedWins || 0;
  }
};
