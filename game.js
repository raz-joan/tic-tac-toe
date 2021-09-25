class Game {
  constructor(playerOne, playerTwo) {
    // this.players = ["millstone", "wheat"];
    // this.tokens = ["./assets/WHEEL.png", "./assets/WHEAT.png"];
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.currentTurn = 0;
    this.currentGameData = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }

  checkForWin() {
    // var playerOne = new Player(this.players[0], this.tokens[0]);
    // var playerTwo = new Player(this.players[1], this.tokens[1]);

    var currentPlayerId;
    if (this.currentTurn % 2) {
      currentPlayerId = playerOne.id;
    } else {
      currentPlayerId = playerTwo.id;
    }

    this.currentTurn++;

    if(this.currentGameData[0] === this.currentGameData[1] && this.currentGameData[1] === this.currentGameData[2]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[3] === this.currentGameData[4] && this.currentGameData[4] === this.currentGameData[5]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[6] === this.currentGameData[7] && this.currentGameData[7] === this.currentGameData[8]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[0] === this.currentGameData[3] && this.currentGameData[3] === this.currentGameData[6]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[1] === this.currentGameData[4] && this.currentGameData[4] === this.currentGameData[7]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[2] === this.currentGameData[5] && this.currentGameData[5] === this.currentGameData[8]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[0] === this.currentGameData[4] && this.currentGameData[4] === this.currentGameData[8]) {
      return `${currentPlayerId} wins!`;
    } else if (this.currentGameData[2] === this.currentGameData[4] && this.currentGameData[4] === this.currentGameData[6]) {
      return `${currentPlayerId} wins!`;
    } else {
      for (var i = 0; i < this.currentGameData.length; i++) {
        if ((typeof this.currentGameData[i]) === (typeof 1)) {
          return;
        }
      }
      return "It's a draw!";
    }
  }

  resetGameBoard() {
    this.currentTurn = 0;
    this.currentGameData = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
};
