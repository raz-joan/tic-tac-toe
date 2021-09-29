// query selectors:
var leftScoreBox = document.querySelector('#leftScoreBox');
var rightScoreBox = document.querySelector('#rightScoreBox');

var currentPlayerName = document.querySelector('#currentPlayerName');
var currentPlayerDisplay = document.querySelector('#currentPlayerDisplay');
var winnerDisplay = document.querySelector('#winnerDisplay');

var gameBoard = document.querySelector('#gameBoard');
var gameSquaresAll = document.querySelectorAll('.game-square');

var themeLink = document.querySelector('#themeLink');
var themeButton = document.querySelector('#themeButton');

// event listeners:
window.addEventListener('load', retrieveWins);
gameBoard.addEventListener('click', checkIfEmptySquare);
themeButton.addEventListener('click', toggleLightDarkTheme);

// variables:
var game = new Game();

// event handlers and functions:
function retrieveWins() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  leftScoreBox.innerText = game.playerOne.wins;
  rightScoreBox.innerText = game.playerTwo.wins;
  game.randomizeFirstPlayer();
  displayCurrentPlayer();
};

function displayCurrentPlayer() {
  currentPlayerName.innerText = game.currentPlayer.id;
};

function checkIfEmptySquare(e) {
  if(e.target.classList.contains('game-square')) {
    if (game.gameIsOver) {return;}
    if (e.target.children.length < 1) {
      themeButton.disabled = true;
      themeButton.classList.remove('hover');
      placePlayerToken(e.target);
      determineGameStatus();
    }
  }
};

function placePlayerToken(targetSquare) {
  var targetSquareNumber = targetSquare.classList[1];
  game.updateGameData(targetSquareNumber, game.currentPlayer.id);
  targetSquare.innerHTML = `<img src=${game.currentPlayer.token} alt="${game.currentPlayer.id} icon">`;
  targetSquare.classList.remove('hover');
};

function determineGameStatus() {
  var gameStatus = game.checkForWin();
  if (gameStatus === "It's a draw!") {
    game.gameIsOver = true;
    removeRemainingHoverClass();
    displayWinner("It's a draw!");
    setTimeout(resetGameBoard, 2000);
  } else if (gameStatus) {
    game.gameIsOver = true;
    removeRemainingHoverClass();
    updateScore();
    displayWinner(`${game.currentPlayer.id} wins!`);
    setTimeout(resetGameBoard, 2000);
  }
  game.alternateCurrentPlayer();
  displayCurrentPlayer();
};

function displayWinner(winner) {
  winnerDisplay.innerText = winner;
  toggleCurrentWinnerDisplay();
};

function toggleCurrentWinnerDisplay() {
  winnerDisplay.classList.toggle('hidden');
  currentPlayerDisplay.classList.toggle('hidden');
};

function removeRemainingHoverClass() {
  for (var i = 0; i < gameSquaresAll.length; i++) {
    if (gameSquaresAll[i].classList.contains('hover')) {
      gameSquaresAll[i].classList.remove('hover');
    }
  }
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
    gameSquaresAll[i].classList.add('hover');
  }
  toggleCurrentWinnerDisplay();
  game.gameIsOver = false;
  themeButton.disabled = false;
  themeButton.classList.add('hover');
};

function toggleLightDarkTheme() {
  if (themeButton.innerText === 'dark mode') {
    themeButton.innerText = 'light mode';
    game.playerOne.token = "./assets/WHEEL_INVERSE.png";
    game.playerTwo.token = "./assets/WHEAT_INVERSE.png";
    themeLink.href = "dark-theme.css";
  } else {
    themeButton.innerText = 'dark mode';
    game.playerOne.token = "./assets/WHEEL.png";
    game.playerTwo.token = "./assets/WHEAT.png";
    themeLink.href = "light-theme.css";
  }
};
