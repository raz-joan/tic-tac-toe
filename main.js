// X query each players' score box in their aside
// X query player's turn box
// X query winner box
// X query the 9 boxes (zero through eight)

// X listeners on the 9 boxes (zero through eight)

// X when a box is clicked ...
  // does it contain an img either wheel or wheat?
  // if yes, do nothing
  // if no, innerHTML the clicked box with the current player's token
  // in this case `element.children.length = 0` i think?

// keep track of turn with modulo for even/odd
// how to switch first player from game to game?
// how to switch innerText for each new turn?

// how to check for win?
// how to update the scores in instances? and then, on the DOM?
// how to display the winner with innerText?

// setTimeout for 3 - 5 delay before board resets on screen?
// how to reset board?

// how to save each player's win total to localStorage?
// how to retrieve each player's win total from localStorage and set innerText?


// query selectors:
var leftScoreBox = document.querySelector('#leftScoreBox');
var rightScoreBox = document.querySelector('#rightScoreBox');

var currentPlayerDisplay = document.querySelector('#currentPlayerDisplay');
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
  if (!e.target.children.length) {
    e.target.innerHTML = `<img src="./assets/WHEEL.png" alt="millstone icon">`;
  }
}
