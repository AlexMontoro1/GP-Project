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
    if (
      this.linesArr.length === 0 ||
      this.linesArr[this.linesArr.length - 1].y > 220
    ) {
      let newLines = new Lines();
      this.linesArr.push(newLines);
    }
  }

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
    console.log("ejecutando recursion");
    // 1 limpieza del canvas
    // 2 acciones y movimientos de los elementos
    this.obstacleSpawn();
    this.obstaclesArr.forEach((eachElement) => {
      if (eachElement.x >= 290) {
        eachElement.moveRight();
      } else {
        eachElement.moveLeft();
      }
      this.linesSpawn();
      this.linesArr.forEach((eachElement) => {
        eachElement.move();
      })
    });
    // 3 dibujado de los elementos
    // EL ORDEN DE LOS ELEMENTOS ES IMPORTANTE
    this.drawRoad();
    this.drawBackGroundSky();
    this.linesArr.forEach((eachElement) => {
      eachElement.draw()
    })
    this.bike.draw();
    this.obstaclesArr.forEach((eachElement) => {
      eachElement.draw();
    });
    console.log(this.linesArr)
    //console.log(this.roadLines())

    // 4 Recursion (requestAnimationFrame)
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop); // invoca game loop
    }
  };

}