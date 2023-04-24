const startscreenDOM = document.querySelector("#start-screen");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");
const pauseBtnDOM = document.querySelector("#pause");

const ctx = canvas.getContext("2d");
let gameObj;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  // 1 cambiar las pantallas de juego
  startscreenDOM.style.display = "none";
  canvas.style.display = "block";
  // 2 crear los elementos del juego
  gameObj = new Game();
  // 3 inciar el bucle del juego
  gameObj.gameLoop();
};

const restartGame = () => {
  gameOverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);
pauseBtnDOM.addEventListener("click", () => {
  if (gameObj !== undefined && gameObj.isGameOn === true) {
    gameObj.isGameOn = false;
  } else {
    gameObj.isGameOn = true;
    gameObj.gameLoop();
  }
});
/*window.addEventListener("keydown", (event) => {
    if(gameObj !== undefined && event.code === "KeyA"){
        gameObj.bike.bikeMoveRight()
    }if(gameObj !== undefined && event.code === "KeyD"){
        gameObj.bike.bikeMoveLeft()
    }

})*/
canvas.addEventListener("mousemove", (event) => {
    if(gameObj !== undefined){
        mouseX = event.offsetX;
        if(mouseX > canvas.width-530 && mouseX < canvas.width-130){
            gameObj.bike.x = mouseX;
        }
    }
})