class Game {
  // propiedades de Game ==> todos los elementos que existen en el juego
  constructor() {
    this.isGameOn = true;
    this.backGroundSky = new Image();
    this.backGroundRight = new Image();
    this.backGroundLeft = new Image();
    this.mountain = new Image();
    this.road = new Image();
    this.scoreImage = new Image();
    this.backGroundSky.src = "images/sky-background-1.png";
    this.backGroundRight.src = "images/fondo-verde-derecha.png";
    this.backGroundLeft.src = "images/fondo-verde-izquierda.png";
    this.mountain.src = "images/mountain.png";
    this.road.src = "images/road.png";
    this.scoreImage.src = "images/score.png";
    this.bike = new Bike();
    this.obstaclesArr = [];
    this.linesArr = [];
    this.coinsArr = [];
    this.clocksArr = [];

    this.line1 = this.linesArr.push(new Lines(430, 1));
    this.line2 = this.linesArr.push(new Lines(330, 1));
    this.line3 = this.linesArr.push(new Lines(230, 1));
    this.line4 = this.linesArr.push(new Lines(130, 1));
    this.frames = 0;
    this.score = 0;
  }
  drawBackGroundSky = () => {
    ctx.drawImage(this.backGroundSky, 0, 0, canvas.width, 135);
  };
  drawRoad = () => {
    ctx.drawImage(this.road, 0, 0, canvas.width, 600);
  };
  drawBackGroundRight = () => {
    ctx.drawImage(this.backGroundRight, 300, 135, 340, 465);
  };
  drawBackGroundLeft = () => {
    ctx.drawImage(this.backGroundLeft, 0, 135, 340, 465);
  };
  drawMountain = () => {
    ctx.drawImage(this.mountain, 0, 0, canvas.width, 190);
  };
  drawScoreImage = () => {
    ctx.drawImage(this.scoreImage, 240, 20, 100, 30);
  };
  drawScore = () => {
    ctx.font = "50px fuente";
    ctx.strokeText(this.score, 350, 53);
  };
  obstacleSpawn = () => {
    //aqui hacemos que los obstaculos spawneen aleatoriamente en un pequeño rango del eje x que seria el principio de la carretera.
    if (
      this.obstaclesArr.length === 0 ||
      this.obstaclesArr[this.obstaclesArr.length - 1].y > 300
    ) {
      let randomPositionX = Math.random() * 50 + 265;
      let newObstacle = new Obstacle(randomPositionX, 1);
      this.obstaclesArr.push(newObstacle);
    }
  };
  linesSpawn = () => {
    if (this.linesArr[this.linesArr.length - 1].y > 180) {
      let newLines = new Lines(135, 1);
      this.linesArr.push(newLines);
    }
  };
  coinSpawn = () => {
    // lo mismo que con los obstaculos pero con las monedas
    if (
      this.coinsArr.length === 0 ||
      this.coinsArr[this.coinsArr.length - 1].y > 300
    ) {
      let randomPositionX = Math.random() * 50 + 265;
      let newCoin = new Coin(randomPositionX, 1);
      this.coinsArr.push(newCoin);
    }
  };
  clockSpawn = () => {
    // para que el reloj spawnee en los siguientes frames
    if (
      this.frames === 4000 ||
      this.frames === 5000 ||
      this.frames === 6000 ||
      this.frames === 7000 ||
      this.frames === 8000 ||
      this.frames === 9000
    ) {
      this.clocksArr.shift();
      let randomPositionX = Math.random() * 50 + 265;
      let newclock = new Clock(randomPositionX, 1);
      this.clocksArr.push(newclock);
    }
  };
  checkCollisionBiketoObstacle = () => {
    // una colision por todos los lados a los obstaculos.
    this.obstaclesArr.forEach((eachElement) => {
      if (
        eachElement.x < this.bike.x + this.bike.w &&
        eachElement.x + eachElement.w > this.bike.x &&
        eachElement.y < this.bike.y + this.bike.h &&
        eachElement.h + eachElement.y > this.bike.y
      ) {
        // Collision detected!
        audio.pause();
        audioCollision.play();
        this.gameOver();

        audio.loop = false;
        scoreResult();
      }
    });
  };
  checkCollisionBiketoCoin = () => {
    this.coinsArr.forEach((eachElement) => {
      if (
        eachElement.x < this.bike.x + this.bike.w &&
        eachElement.x + eachElement.w > this.bike.x &&
        eachElement.y < this.bike.y + this.bike.h &&
        eachElement.h + eachElement.y > this.bike.y
      ) {
        // Collision detected!
        this.coinsArr.shift();
        this.score++;
      }
    });
  };
  checkCollisionBiketoClock = () => {
    this.clocksArr.forEach((eachElement) => {
      if (
        eachElement.x < this.bike.x + this.bike.w &&
        eachElement.x + eachElement.w > this.bike.x &&
        eachElement.y < this.bike.y + this.bike.h &&
        eachElement.h + eachElement.y > this.bike.y
      ) {
        // Collision detected!
        // Aqui lo que hemos hecho es que cuando se efectue la colision con el reloj, los frames que estamos almacenando en la variable, bajen un numero random entre un rango determinado, y de una sensacion al juego de reduccion de velocidad.
        this.clocksArr.shift();
        let randomNum = Math.random();
        this.frames = this.frames - (Math.floor(randomNum * 1000) + 1500);
      }
    });
  };
  removeObstacleOut = () => {
    if (this.obstaclesArr[0].y > 600) {
      this.obstaclesArr.shift();
    }
  };
  removeLinesOut = () => {
    if (this.linesArr[0].y > 600) {
      this.linesArr.shift();
    }
  };
  removeCoinsOut = () => {
    if (this.coinsArr[0].y > 600) {
      this.coinsArr.shift();
    }
  };

  gameOver = () => {
    // 1 detener el juego
    this.isGameOn = false;
    // 2 ocultar el canvas
    canvas.style.display = "none";
    // 3 mostramos pantalla final
    muteButtonDOM.style.display = "none";
    gameOverScreenDOM.style.display = "flex";
  };

  // metodos de Game ==> todas las accionmes que se realizan en el juego

  gameLoop = () => {
    this.frames++;
    // 1 limpieza del canvas
    // 2 acciones y movimientos de los elementos
    this.obstacleSpawn();
    this.obstaclesArr.forEach((eachElement) => {
      if (eachElement.x >= 300) {
        eachElement.moveRight();
      } else if (eachElement.x >= 281 && eachElement.x <= 299) {
        eachElement.moveFront();
      } else {
        eachElement.moveLeft();
      }
    });
    // en todos estos metodos de movimiento aplicamos una aceleracion que va en base a los frames que va contando el propio juego.
    this.obstaclesArr.forEach((eachElement) => {
      eachElement.acceleration = this.frames / 1500;
    });
    this.linesSpawn();
    this.linesArr.forEach((eachElement) => {
      eachElement.move();
      eachElement.checkPositionForGrow();
    });
    this.linesArr.forEach((eachElement) => {
      eachElement.acceleration = this.frames / 1500;
    });
    this.coinSpawn();
    this.coinsArr.forEach((eachElement) => {
      if (eachElement.x >= 300) {
        eachElement.moveRight();
      } else if (eachElement.x >= 281 && eachElement.x <= 299) {
        eachElement.moveFront();
      } else {
        eachElement.moveLeft();
      }
    });
    this.coinsArr.forEach((eachElement) => {
      eachElement.acceleration = this.frames / 1500;
    });
    this.clockSpawn();
    this.clocksArr.forEach((eachElement) => {
      if (eachElement.x >= 300) {
        eachElement.moveRight();
      } else if (eachElement.x >= 281 && eachElement.x <= 299) {
        eachElement.moveFront();
      } else {
        eachElement.moveLeft();
      }
    });
    this.clocksArr.forEach((eachElement) => {
      eachElement.acceleration = this.frames / 1500;
    });

    // 3 dibujado de los elementos
    // EL ORDEN DE LOS ELEMENTOS ES IMPORTANTE
    this.drawBackGroundSky();
    this.drawScoreImage();
    this.drawScore();
    this.drawMountain();
    this.drawBackGroundRight();
    this.drawBackGroundLeft();
    this.drawRoad();
    this.linesArr.forEach((eachElement) => {
      eachElement.draw();
    });
    this.bike.draw();
    this.obstaclesArr.forEach((eachElement) => {
      eachElement.draw();
    });
    this.coinsArr.forEach((eachElement) => {
      eachElement.draw();
    });
    this.clocksArr.forEach((eachElement) => {
      eachElement.draw();
    });
    this.checkCollisionBiketoObstacle();
    this.checkCollisionBiketoCoin();
    this.checkCollisionBiketoClock();
    this.removeObstacleOut();
    this.removeLinesOut();
    this.removeCoinsOut();

    // 4 Recursion (requestAnimationFrame)
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop); // invoca game loop
    }
  };
}
