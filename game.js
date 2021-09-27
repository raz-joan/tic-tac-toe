class Game {
  constructor() {
    this.playerOne = new Player('millstone', "./assets/WHEEL.png");
    this.playerTwo = new Player('wheat', "./assets/WHEAT.png");
    this.currentTurn = 0;
    this.playerHasWon = false;
    this.currentGameData = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8
    };
  }

  incrementCurrentTurn() {
    this.currentTurn++;
  }

  updateCurrentGameData(keyName, playerId) {
    this.currentGameData[keyName] = playerId;
  }

  updatePlayerScore(playerId) {
    if (playerId === this.playerOne.id) {
      this.playerOne.wins++;
      this.playerOne.saveWinsToStorage();
    } else if (playerId === this.playerTwo.id) {
      this.playerTwo.wins++;
      this.playerTwo.saveWinsToStorage();
    }
  }

  checkForWin() {
    if(this.currentGameData.zero === this.currentGameData.one && this.currentGameData.one === this.currentGameData.two) {
      return true;
    } else if (this.currentGameData.three === this.currentGameData.four && this.currentGameData.four === this.currentGameData.five) {
      return true;
    } else if (this.currentGameData.six === this.currentGameData.seven && this.currentGameData.seven === this.currentGameData.eight) {
      return true;
    } else if (this.currentGameData.zero === this.currentGameData.three && this.currentGameData.three === this.currentGameData.six) {
      return true;
    } else if (this.currentGameData.one === this.currentGameData.four && this.currentGameData.four === this.currentGameData.seven) {
      return true;
    } else if (this.currentGameData.two === this.currentGameData.five && this.currentGameData.five === this.currentGameData.eight) {
      return true;
    } else if (this.currentGameData.zero === this.currentGameData.four && this.currentGameData.four === this.currentGameData.eight) {
      return true;
    } else if (this.currentGameData.two === this.currentGameData.four && this.currentGameData.four === this.currentGameData.six) {
      return true;
    } else {
      for (const key in this.currentGameData) {
        if ((typeof this.currentGameData[key]) === (typeof 1)) {
          return false;
        }
      }
      return "It's a draw!";
    }
  }

  resetGameData() {
    this.currentGameData = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8
    }
  }
};
