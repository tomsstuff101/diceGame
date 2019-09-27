# diceGame


There are two parts to this project:
single player 
multiplayer players

Single player dice game:
Roll the dice to begin the game.The dice appears on the first roll.
Each time the dice is rolled the score adds up.If the score passes 20, you win.If you roll a 1 at any time, you lose and the game restarts.


 Multiplayer dice game:
Rules are the same as the single player version, but you must display a dice for each player, and it must highlight the current player and keep their score. 



### Features to add

Improved UX/UI
* Visuals: Dice rolling
* choose colour theme of game (dice, background)

* Audio: Dice roll, win, loose, start

Player Info
* Save (JSON file to localStorage)
      game state
      game scores (name, number of games won and lost etc)
      colour theming

* Save (to Database via a RESTfull api)
      game state
      game scores (name, number of games won and lost etc)
      colour theming

* Setup Up the above as a javascript module so I can import the same functionality into other projects
