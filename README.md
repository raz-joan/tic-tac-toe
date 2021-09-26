# Mod 1 Final Project: Tic Tac Toe (Flour Edition)  

Authored by: [Joan Rasmussen](https://github.com/raz-joan)  

## Table Of Contents
- [Overview](#overview)
- [Project Goals](#project-goals)
  - [Project Spec / Rubric Link](#project-spec)
- [Technologies](#technologies)
- [Code Architecture](#code-architecture)
- [Illustrations](#illustrations)
- [Reflections](#reflections)
  - [Challenges](#challenges)
  - [Wins](#wins)


## Overview  
  This solo project was meant to demonstrate my understanding of the Mod1 curriculum. The overall goal of the project was to design, plan, and build a functional tic-tac-toe game from scratch. The game should follow the general tic-tac-toe rules of rotating turns until one of the two players wins by having three tokens in a row, column, or diagonal. A few additional features included: displaying the current player's name before they play their token, displaying the winners name upon a win, displaying each player's scores, and being able to retrieve these scores from local storage so that they persist through a page refresh.  

## Project Goals  
  The learning goals of this project were to:  
  - solidify and demonstrate your understanding of writing DRY JS, to use localStorage to persist data, and to use event delegation to handle similar event listeners.  
  - understand the difference between the data model and how the data is displayed on the DOM.  
  - iterate through/filter DOM elements using for loops.  
  - use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside "answer" to a logical challenge.    

### Project Spec  
  You can find the project rubric [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html).  

## Technologies  
  Technologies used were: CSS, HTML, and JavaScript.  

## Code Architecture  
  This application consists of one HTML file (index.html), one CSS file (styles.css), and three JavaScript files (game.js, player.js, and main.js). The HTML provides the structure of the application, the CSS provides the styling of this structure, and the JavaScript provides the behavior needed to update the structure, the data models and the DOM. There are two class files, Game and Player, which store the information for each player and the current game, and then the main.js file contains the queried variables, event listeners and handlers, as well as, the functions that update the data models and then the DOM.  

## Illustrations  
  It's a draw!  
  [Giphy of It's a Draw!](https://media.giphy.com/media/i2MfSuZ6je2PSsHWes/giphy.gif?cid=790b7611d44629e433c1f80cc262837e4b6cfdf1c644a2b1&rid=giphy.gif&ct=g)  

  Millstone Wins!  
  [Giphy of Millstone wins!](https://media.giphy.com/media/zU9Klrwy7paFYrfkvi/giphy.gif?cid=790b761180e62b5a7fb0fe709cf6248956fec8d36b328a45&rid=giphy.gif&ct=g)  

  Wheat Wins and score tracking!  
  [Giphy of Wheat wins and score tracking!](https://media.giphy.com/media/g7eXM55ujNz40Mb2VE/giphy.gif?cid=790b761106245838f19a3bb08416b1cf09654db3ab354671&rid=giphy.gif&ct=g)  

## Reflections  
  I found this project to be challenging, yet manageable, and really fun! After reading through the spec and making a plan, I created a Trello board to reflect this road map with due dates for each portion of the project's progression. I updated my google calendar accordingly, so that I had time-blocked enough time for each iteration.  

  As for the project road map, I first white-boarded my logic plan and made an ordered list of everything that I thought I would need to build. Next, I wire-framed my design. Afterwards, I built out the HTML and CSS files as fully as possible. I then returned to writing the classes of "player" and "game". Finally, I slowly worked on one piece of functionality at a time, adjusting prior code as needed, so that everything "played nice". In the end, I found a few bugs that needed to be addressed, but this was not difficult to add to the code that already existed.  

### Challenges  
  The most difficult parts of this project were figuring out how to:  
  - stop a token from being replaced if a game square was clicked again.  
  - how to stop clicks from still occurring once a game had been won while the timeout was running.  

### Wins  
  I am most proud of the following:  
  - having an organized and thorough road map of the project.
  - the wireframe planning and HTML/CSS execution of it (my design is simple and clean and my code for this project was much better than previous Mod1 efforts).
  - the JavaScript logic and connecting the data model to the DOM.
  - finishing earlier than anticipated!
  - figuring it all out on my own!
