// query selectors:
var leftScoreBox = document.querySelector('#leftScoreBox');
var rightScoreBox = document.querySelector('#rightScoreBox');

var currentPlayerDisplay = document.querySelector('#currentPlayerDisplay');
var currentPlayerBox = document.querySelector('#currentPlayerBox');
var winnerDisplay = document.querySelector('#winnerDisplay');

var gameBoard = document.querySelector('#gameBoard');
var gameSquaresAll = document.querySelectorAll('.game-square');

// event listeners:
window.addEventListener('load', retrieveWins);
gameBoard.addEventListener('click', checkIfEmptySquare);

// variables:
var playerIds = ['millstone', 'wheat'];
var playerTokens = ["./assets/WHEEL.png", "./assets/WHEAT.png"];

var playerMillstone = new Player(playerIds[0], playerTokens[0]);
var playerWheat = new Player(playerIds[1], playerTokens[1]);
var game = new Game(playerMillstone, playerWheat);

// event handlers and functions:
function checkIfEmptySquare(e) {
  var currentPlayer = determineCurrentPlayer();
  if(e.target.classList.contains('game-square')) {
    if (game.playerHasWon) {return;}
    if (e.target.children.length < 1) {
      e.target.innerHTML = `<img src=${currentPlayer.token} alt="${currentPlayer.id} icon">`;
      var targetSquareNumber = e.target.classList[1];
      game.updateCurrentGameData(targetSquareNumber, currentPlayer.id);
      var gameStatus = game.checkForWin();
      if (gameStatus === "It's a draw!") {
        game.playerHasWon = true;
        displayWinner("It's a draw!");
        setTimeout(resetGameBoard, 1500);
      } else if (gameStatus) {
        game.playerHasWon = true;
        updateScore(currentPlayer);
        displayWinner(`${currentPlayer.id} wins!`);
        setTimeout(resetGameBoard, 1500);
      }
      game.incrementCurrentTurn();
      var nextCurrentPlayer = determineCurrentPlayer();
      displayCurrentPlayer(nextCurrentPlayer);
    }
  }
};

function resetGameBoard() {
  game.resetGameData();
  for (var i = 0; i < gameSquaresAll.length; i++) {
    gameSquaresAll[i].innerHTML = ``;
  }
  displayInitialPlayer();
  toggleCurrentWinnerDisplay();
  game.playerHasWon = false;
};

function updateScore(currentPlayer) {
  game.updatePlayerScore(currentPlayer.id);
  if (currentPlayer.id === 'millstone') {
    leftScoreBox.innerText = game.playerOne.wins;
  } else if (currentPlayer.id === 'wheat') {
    rightScoreBox.innerText = game.playerTwo.wins;
  }
};

function displayWinner(winner) {
  winnerDisplay.innerText = winner;
  toggleCurrentWinnerDisplay();
};

function toggleCurrentWinnerDisplay() {
  winnerDisplay.classList.toggle('hidden');
  currentPlayerBox.classList.toggle('hidden');
};

function determineCurrentPlayer() {
  var currentPlayer;
  if (!(game.currentTurn % 2)) {
    currentPlayer = playerMillstone;
  } else {
    currentPlayer = playerWheat;
  }
  return currentPlayer;
};

function displayCurrentPlayer(player) {
  currentPlayerDisplay.innerText = player.id;
};

function displayInitialPlayer() {
  var initialPlayer = determineCurrentPlayer();
  displayCurrentPlayer(initialPlayer);
};

function retrieveWins() {
  playerMillstone.retrieveWinsFromStorage();
  playerWheat.retrieveWinsFromStorage();
  leftScoreBox.innerText = playerMillstone.wins;
  rightScoreBox.innerText = playerWheat.wins;
  displayInitialPlayer();
};
