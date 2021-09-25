class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentTurn = 0;
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

  // updateCurrentGameData(playerId) {
  //
  // };

  checkForWin() {
    if(this.currentGameData.zero === this.currentGameData.one && this.currentGameData.one === this.currentGameData.two) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.three === this.currentGameData.four && this.currentGameData.four === this.currentGameData.five) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.six === this.currentGameData.seven && this.currentGameData.seven === this.currentGameData.eight) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.zero === this.currentGameData.three && this.currentGameData.three === this.currentGameData.six) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.one === this.currentGameData.four && this.currentGameData.four === this.currentGameData.seven) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.two === this.currentGameData.five && this.currentGameData.five === this.currentGameData.eight) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.zero === this.currentGameData.four && this.currentGameData.four === this.currentGameData.eight) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData.two === this.currentGameData.four && this.currentGameData.four === this.currentGameData.six) {
      return `${currentPlayerId} wins!`;
    } else {
      for (const key in this.currentGameData) {
        if ((typeof this.currentGameData[key]) === (typeof 1)) {
          return;
        }
      }
      return "It's a draw!";
    }
  }

  resetGameBoard() {
    this.currentTurn = 0;
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
