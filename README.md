# GP-Project

## [Play the Game!](https://alexmontoro1.github.io/GP-Project/)

![Game Logo](images/GP-Project.png)


# Description

GP-Project is a game where you are on a road where you have to get coins and avoid obstacles, the game ends when you hit an obstacle and have an accident! When the game ends you will have the result of the coins you have been able to get.

# Main Functionalities

- You can move the rider using the cursor by moving it to the right or left.
- As time goes by, your rider will pick up more and more speed.
- You can collect coins to increase your score simply by hitting them.
- When you have a good acceleration, you can find clocks that will slow down your speed and then continue collecting coins without making it impossible for the acceleration.
- You can pause the game using the space bar at any time.
- You can mute the game volume by clicking the mute icon just below the game screen.
- When you collide with another biker, you will lose the game and the coins you have obtained will be shown on the screen in the form of a score, as well as a button that allows you to try again as many times as you want.

# Backlog Functionalities

- Implement another type of obstacle riders.
- Make it possible for you to select the rider model you want to play with.
- Create an environment that moves to the sides, just like the road, creating that feeling of moving forward.
- As the frames go by, change the setting of the game simulating that it is night and day.

# Technologies Used

- JavaScript
- CSS
- HTML
- DOM Manipulation
- JS Canvas
- JS Classes
- JS Audio() and JS Image()
- External Text Fonts Use

# States

- Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

## index.html

- Start screen -->
- Game window -->
- Game over -->
- scripts

## style.css

- @font-face
- #styles

## main.js
- buildDom();
- audio()
- customFont()
- startGame()
- restartGame()
- addName()
- scoreResult()
- pauseGame()
- mouseMove()

## Game.js

 - Game ()
    - this.isGameOn;
    - this.backGroundSky;
    - this.backGroundRight;
    - this.backGroundLeft;
    - this.mountain;
    - this.road;
    - this.scoreImage;
    - this.bike;
    - this.obstaclesArr;
    - this.linesArr;
    - this.coinsArr;
    - this.clocksArr;
  
    - this.line1;
    - this.line2;
    - this.line3;
    - this.line4;
    - this.frames;
    - this.score;
    
 - gameLoop()
 - obstacleSpawn()
 - linesSpawn()
 - coinSpawn()
 - clockSpawn()
 - checkCollision()
 - remove()
 - gameOver()
  
## bike.js

- Bike ()
   - this.img;
   - this.x;
   - this.y;
   - this.w;
   - this.h;
    
- draw()    
    
## obstacleBikes.js

- Obstacle (positionX, acceleration)
   - this.img;
   - this.x;
   - this.y;
   - this.w;
   - this.h;
   - this.speed;
   - this.moveToMe;
   - this.growPart;
   - this.acceleration;
- draw()
- moveRight()
- moveLeft()
- moveFront()
- checkPositionForGrow()

## lines.js

- Lines (positionY, acceleration)
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.speed;
    - this.growPart;
    - this.acceleration;
- draw()
- move()
- checkPositionForGrow()

## coins.js

- Coin (positionX, acceleration)
    - this.img;
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.speed;
    - this.moveToMe;
    - this.growPart;
    - this.acceleration;
- draw()
- moveRight()
- moveLeft()
- moveFront()
- checkPositionForGrow()

## clock.js

- Clock (positionX, acceleration)
    - this.img;
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.speed;
    - this.moveToMe;
    - this.growPart;
    - this.acceleration;
- draw()
- moveRight()
- moveLeft()
- moveFront()
- checkPositionForGrow()

# Extra Links

## Deploy
[Link](https://alexmontoro1.github.io/GP-Project/)
