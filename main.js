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
var game = new Game();

// event handlers and functions:
function retrieveWins() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  leftScoreBox.innerText = game.playerOne.wins;
  rightScoreBox.innerText = game.playerTwo.wins;
  game.determineCurrentPlayer();
  displayCurrentPlayer();
};

function displayCurrentPlayer() {
  currentPlayerDisplay.innerText = game.currentPlayer.id;
};

function checkIfEmptySquare(e) {
  if(e.target.classList.contains('game-square')) {
    if (game.playerHasWon) {return;}
    if (e.target.children.length < 1) {
      placePlayerToken(e.target);
      checkForGameWin();
    }
  }
};

function placePlayerToken(targetSquare) {
  var targetSquareNumber = targetSquare.classList[1];
  game.updateCurrentGameData(targetSquareNumber, game.currentPlayer.id);
  targetSquare.innerHTML = `<img src=${game.currentPlayer.token} alt="${game.currentPlayer.id} icon">`;
};

function checkForGameWin() {
  var gameStatus = game.checkForWin();
  if (gameStatus === "It's a draw!") {
    game.playerHasWon = true;
    displayWinner("It's a draw!");
    setTimeout(resetGameBoard, 1500);
  } else if (gameStatus) {
    game.playerHasWon = true;
    updateScore();
    displayWinner(`${game.currentPlayer.id} wins!`);
    setTimeout(resetGameBoard, 1500);
  }
  game.incrementCurrentTurn();
  game.determineCurrentPlayer();
  displayCurrentPlayer();
};

function displayWinner(winner) {
  winnerDisplay.innerText = winner;
  toggleCurrentWinnerDisplay();
};

function toggleCurrentWinnerDisplay() {
  winnerDisplay.classList.toggle('hidden');
  currentPlayerBox.classList.toggle('hidden');
};

function updateScore() {
  game.updatePlayerScore();
  if (game.currentPlayer.id === 'millstone') {
    leftScoreBox.innerText = game.playerOne.wins;
  } else if (game.currentPlayer.id === 'wheat') {
    rightScoreBox.innerText = game.playerTwo.wins;
  }
};

function resetGameBoard() {
  game.resetGameData();
  for (var i = 0; i < gameSquaresAll.length; i++) {
    gameSquaresAll[i].innerHTML = ``;
  }
  displayCurrentPlayer();
  toggleCurrentWinnerDisplay();
  game.playerHasWon = false;
};
