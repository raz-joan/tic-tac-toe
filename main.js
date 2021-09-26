// X query each players' score box in their aside
// X query player's turn box
// X query winner box
// X query the 9 boxes (zero through eight)

// X listeners on the 9 boxes (zero through eight)

// X when a box is clicked ...
  // X does it contain an img either wheel or wheat?
  // X if yes, do nothing
  // X if no, innerHTML the clicked box with the current player's token
  // X in this case `element.children.length = 0` i think?

// X keep track of turn with modulo for even/odd
// X how to switch first player from game to game?
// X how to switch innerText for each new turn?

// X how to check for win?
// X how to update the scores in instances? and then, on the DOM?
// X how to display the winner with innerText?

// X setTimeout for 1.5 sec delay before board resets on screen?
// X how to reset board?

// X how to save each player's win total to localStorage?
// X how to retrieve each player's win total from localStorage and set innerText?


// query selectors:
var leftScoreBox = document.querySelector('#leftScoreBox');
var rightScoreBox = document.querySelector('#rightScoreBox');

var currentPlayerDisplay = document.querySelector('#currentPlayerDisplay');
var currentPlayerBox = document.querySelector('#currentPlayerBox');
var winnerDisplay = document.querySelector('#winnerDisplay');

var gameSquareZero = document.querySelector('#gameSquareZero');
var gameSquareOne = document.querySelector('#gameSquareOne');
var gameSquareTwo = document.querySelector('#gameSquareTwo');
var gameSquareThree = document.querySelector('#gameSquareThree');
var gameSquareFour = document.querySelector('#gameSquareFour');
var gameSquareFive = document.querySelector('#gameSquareFive');
var gameSquareSix = document.querySelector('#gameSquareSix');
var gameSquareSeven = document.querySelector('#gameSquareSeven');
var gameSquareEight = document.querySelector('#gameSquareEight');

// event listeners:
window.addEventListener('load', retrieveWins);
gameSquareZero.addEventListener('click', checkIfEmptySquare);
gameSquareOne.addEventListener('click', checkIfEmptySquare);
gameSquareTwo.addEventListener('click', checkIfEmptySquare);
gameSquareThree.addEventListener('click', checkIfEmptySquare);
gameSquareFour.addEventListener('click', checkIfEmptySquare);
gameSquareFive.addEventListener('click', checkIfEmptySquare);
gameSquareSix.addEventListener('click', checkIfEmptySquare);
gameSquareSeven.addEventListener('click', checkIfEmptySquare);
gameSquareEight.addEventListener('click', checkIfEmptySquare);

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
    if (e.target.children.length < 1) {
      e.target.innerHTML = `<img class="image" src=${currentPlayer.token} alt="${currentPlayer.id} icon">`;
      var targetClassName = e.target.classList[1];
      game.updateCurrentGameData(targetClassName, currentPlayer.id);
      var gameStatus = game.checkForWin();
      if (gameStatus === "It's a draw!") {
        displayWinner("It's a draw!");
        setTimeout(resetGameBoard, 1500);
      } else if (gameStatus) {
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
  gameSquareZero.innerHTML = ``;
  gameSquareOne.innerHTML = ``;
  gameSquareTwo.innerHTML = ``;
  gameSquareThree.innerHTML = ``;
  gameSquareFour.innerHTML = ``;
  gameSquareFive.innerHTML = ``;
  gameSquareSix.innerHTML = ``;
  gameSquareSeven.innerHTML = ``;
  gameSquareEight.innerHTML = ``;
  displayInitialPlayer();
  toggleCurrentWinnerDisplay();
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
}

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
