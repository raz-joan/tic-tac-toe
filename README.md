# Mod 1 Final Project: Tic Tac Toe (Flour Edition)  

Authored by: [Joan Rasmussen](https://github.com/raz-joan)  

* See the deployed application [here](https://raz-joan.github.io/tic-tac-toe/)!  

*Note from the author: I chose 'Flour' as the theme out of my love for grain and baking. Every flour has a unique color, aroma, texture, and baking quality - baking, as a result, is a diverse, beautiful, and creative space. When I started a cottage food bakery, my good friend, [Megan S Lott](https://www.meganslott.com/), designed these images as part of my overall branding!  

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

## Project Spec  
  You can find the project rubric [here](https://frontend.turing.edu/projects/module-1/tic-tac-toe-solo.html).  

## Technologies  
  Technologies used were: CSS, HTML, and JavaScript.  

## Code Architecture  
  This application consists of one HTML file (index.html), one CSS file (styles.css), and three JavaScript files (game.js, player.js, and main.js). The HTML provides the structure of the application, the CSS provides the styling of this structure, and the JavaScript provides the behavior needed to update the structure, the data models and the DOM. There are two class files, Game and Player, which store the information for each player and the current game, and then the main.js file contains the queried variables, event listeners and handlers, as well as, the functions that update the data models and then the DOM.  

## Illustrations  
#### Link to Video:  
[![Tic Tac Toe Project](https://res.cloudinary.com/marcomontalbano/image/upload/v1639455147/video_to_markdown/images/youtube--cU1Q6k5_LVQ-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=cU1Q6k5_LVQ "Tic Tac Toe Project")  

#### Desktop:
<img width="800" alt="Screen Shot 2021-12-13 at 9 10 20 PM" src="https://user-images.githubusercontent.com/80644408/145931945-36172cc4-3443-446e-991f-cd36fc4623e7.png">
<img width="800" alt="Screen Shot 2021-12-13 at 9 10 34 PM" src="https://user-images.githubusercontent.com/80644408/145931947-32d1cf4f-336d-4b16-a43b-20e0fb2f11f3.png">  

#### Responsive:
<img width="250" alt="Screen Shot 2021-12-13 at 9 11 21 PM" src="https://user-images.githubusercontent.com/80644408/145931951-b666fb05-16e2-4258-af8e-c4784ecb5991.png"><img width="250" alt="Screen Shot 2021-12-13 at 9 11 38 PM" src="https://user-images.githubusercontent.com/80644408/145931954-6e559351-1e5b-4c95-b37c-823dfb376e35.png">

## Reflections  
  I found this project to be challenging, yet manageable, and really fun! After reading through the spec and making a plan, I created a Trello board to reflect this road map with due dates for each portion of the project's progression. I updated my google calendar accordingly, so that I had time-blocked enough time for each iteration.  

  As for the project road map, I first white-boarded my logic plan and made an ordered list of everything that I thought I would need to build. Next, I wire-framed my design. Afterwards, I built out the HTML and CSS files as fully as possible. I then returned to writing the classes of "player" and "game". Finally, I slowly worked on one piece of functionality at a time, adjusting prior code as needed, so that everything "played nice". In the end, I found a few bugs that needed to be addressed, but this was not difficult to add to the code that already existed.  

## Challenges  
  The most difficult parts of this project were figuring out how to:  
  - stop a token from being replaced if a game square was clicked again.  
  - how to stop clicks from still occurring once a game had been won while the timeout was running.  

## Wins  
  I am most proud of the following:  
  - having an organized and thorough road map of the project.
  - the wireframe planning and HTML/CSS execution of it (my design is simple and clean and my code for this project was much better than previous Mod1 efforts).
  - the JavaScript logic and connecting the data model to the DOM.
  - finishing earlier than anticipated!
  - figuring it all out on my own!
