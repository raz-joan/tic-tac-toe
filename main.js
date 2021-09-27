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
// function checkIfEmptySquare(e) {
//   var currentPlayer = determineCurrentPlayer();
//   if(e.target.classList.contains('game-square')) {
//     if (game.playerHasWon) {return;}
//     if (e.target.children.length < 1) {
//       e.target.innerHTML = `<img src=${currentPlayer.token} alt="${currentPlayer.id} icon">`;
//       var targetSquareNumber = e.target.classList[1];
//       game.updateCurrentGameData(targetSquareNumber, currentPlayer.id);
//       var gameStatus = game.checkForWin();
//       if (gameStatus === "It's a draw!") {
//         game.playerHasWon = true;
//         displayWinner("It's a draw!");
//         setTimeout(resetGameBoard, 1500);
//       } else if (gameStatus) {
//         game.playerHasWon = true;
//         updateScore(currentPlayer);
//         displayWinner(`${currentPlayer.id} wins!`);
//         setTimeout(resetGameBoard, 1500);
//       }
//       game.incrementCurrentTurn();
//       var nextCurrentPlayer = determineCurrentPlayer();
//       displayCurrentPlayer(nextCurrentPlayer);
//     }
//   }
// };
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
  // var currentPlayer = determineCurrentPlayer();
  targetSquare.innerHTML = `<img src=${game.currentPlayer.token} alt="${game.currentPlayer.id} icon">`;
  // var targetSquareNumber = targetSquare.classList[1];
  // game.updateCurrentGameData(targetSquareNumber, currentPlayer.id);
};

function checkForGameWin() {
  // var currentPlayer = determineCurrentPlayer();
  game.determineCurrentPlayer();
  var gameStatus = game.checkForWin();
  if (gameStatus === "It's a draw!") {
    game.playerHasWon = true;
    displayWinner("It's a draw!");
    setTimeout(resetGameBoard, 1500);
  } else if (gameStatus) {
    game.playerHasWon = true;
    // updateScore(currentPlayer);
    // displayWinner(`${currentPlayer.id} wins!`);
    updateScore();
    displayWinner(`${game.currentPlayer.id} wins!`);
    setTimeout(resetGameBoard, 1500);
  }
  game.incrementCurrentTurn();
  // var nextCurrentPlayer = determineCurrentPlayer();
  // displayCurrentPlayer(nextCurrentPlayer);
  game.determineCurrentPlayer();
  displayCurrentPlayer();
};

function resetGameBoard() {
  game.resetGameData();
  for (var i = 0; i < gameSquaresAll.length; i++) {
    gameSquaresAll[i].innerHTML = ``;
  }
  // displayInitialPlayer();
  game.determineCurrentPlayer();
  displayCurrentPlayer();
  toggleCurrentWinnerDisplay();
  game.playerHasWon = false;
};

function updateScore() {
  game.updatePlayerScore();
  if (game.currentPlayer.id === 'millstone') {
    leftScoreBox.innerText = game.playerOne.wins;
  } else if (game.currentPlayer.id === 'wheat') {
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

// function determineCurrentPlayer() {
//   var currentPlayer;
//   if (!(game.currentTurn % 2)) {
//     currentPlayer = game.playerOne;
//   } else {
//     currentPlayer = game.playerTwo;
//   }
//   return currentPlayer;
// };

function displayCurrentPlayer() {
  game.determineCurrentPlayer();
  currentPlayerDisplay.innerText = game.currentPlayer.id;
};

// function displayCurrentPlayer(player) {
//   currentPlayerDisplay.innerText = player.id;
// };

// function displayInitialPlayer() {
//   var initialPlayer = determineCurrentPlayer();
//   displayCurrentPlayer(initialPlayer);
// };

function retrieveWins() {
  game.playerOne.retrieveWinsFromStorage();
  game.playerTwo.retrieveWinsFromStorage();
  leftScoreBox.innerText = game.playerOne.wins;
  rightScoreBox.innerText = game.playerTwo.wins;
  // displayInitialPlayer();
  game.determineCurrentPlayer();
  displayCurrentPlayer();
};
