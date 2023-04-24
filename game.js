class Game {
  // propiedades de Game ==> todos los elementos que existen en el juego
  constructor() {
    this.isGameOn = true;
    this.backGroundSky = new Image();
    this.backGroundSky.src = "images/sky-background-1.png";
    this.skyLength = 150;
    this.road = new Image();
    this.road.src = "images/road.png";
    this.roadLength = 600;
    this.bike = new Bike();
    this.obstaclesArr = [];
    this.linesArr = [];

    this.line1 = this.linesArr.push(new Lines(350));
    this.line2 = this.linesArr.push(new Lines(300));
    this.line3 = this.linesArr.push(new Lines(250));
    this.line4 = this.linesArr.push(new Lines(200));
  }
  drawBackGroundSky = () => {
    ctx.drawImage(this.backGroundSky, 0, 0, canvas.width, this.skyLength);
  };
  drawRoad = () => {
    ctx.drawImage(this.road, 0, 0, canvas.width, this.roadLength);
  };
  obstacleSpawn = () => {
    if (
      this.obstaclesArr.length === 0 ||
      this.obstaclesArr[this.obstaclesArr.length - 1].y > 300
    ) {
      let randomPositionX = Math.random() * 50 + 265;
      let newObstacle = new Obstacle(randomPositionX);
      this.obstaclesArr.push(newObstacle);
    }
  };
  linesSpawn = () => {
    if (this.linesArr[this.linesArr.length - 1].y > 180) {
      let newLines = new Lines(150);
      this.linesArr.push(newLines);
    }
  };
  checkCollisionBiketoObstacle = () => {
    this.obstaclesArr.forEach((eachElement) => {
      if (
        eachElement.x < this.bike.x + this.bike.w &&
        eachElement.x + eachElement.w > this.bike.x &&
        eachElement.y < this.bike.y + this.bike.h &&
        eachElement.h + eachElement.y > this.bike.y
      ) {
        // Collision detected!
        this.gameOver();
      }
    });
  };
  removeObstacleOut = () => {
    if (this.obstaclesArr[0].y > 600) {
      this.obstaclesArr.shift();
    }
  };
  gameOver = () => {
    // 1 detener el juego
    this.isGameOn = false;
    // 2 ocultar el canvas
    canvas.style.display = "none";
    // 3 mostramos pantalla final
    gameOverScreenDOM.style.display = "flex";
  };
  
  // metodos de Game ==> todas las accionmes que se realizan en el juego

  gameLoop = () => {
    //console.log("ejecutando recursion");
    // 1 limpieza del canvas
    // 2 acciones y movimientos de los elementos
   // console.log(this.linesArr[0].speed);
   
    this.obstacleSpawn();
    this.obstaclesArr.forEach((eachElement) => {
      if (eachElement.x >= 300) {
        eachElement.moveRight();
      } else if (eachElement.x >= 281 && eachElement.x <= 299){
        eachElement.moveFront();
      }
      else {
        eachElement.moveLeft();
      }
    });
    this.linesSpawn();
    this.linesArr.forEach((eachElement) => {
      eachElement.move();
      eachElement.checkPositionForGrow();
    });

    // 3 dibujado de los elementos
    // EL ORDEN DE LOS ELEMENTOS ES IMPORTANTE
    this.drawRoad();
    this.drawBackGroundSky();
    this.linesArr.forEach((eachElement) => {
      eachElement.draw();
    });
    this.bike.draw();
    this.obstaclesArr.forEach((eachElement) => {
      eachElement.draw();
    });
    this.checkCollisionBiketoObstacle();
    this.removeObstacleOut();
    //console.log(this.obstaclesArr.length);
    //console.log(this.roadLines())

    // 4 Recursion (requestAnimationFrame)
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop); // invoca game loop
    }
  };
}
