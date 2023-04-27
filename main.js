const startscreenDOM = document.querySelector("#start-screen");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");
const checkBoxDOM = document.querySelector("#show-instructions");
const instructionsDOM = document.querySelector("#instructions");
const welcomeDOM = document.querySelector("#welcome");
const nameTextDOM = document.querySelector("#name-text");
const createNameDOM = document.querySelector("#name-button");
const customFont = new FontFace("fuenteCuadrada","url(3x5/OTF/3X5_____.otf)");
const audio = new Audio();
const audioCollision = new Audio();
audio.src = "audios/motorcycle-ride-01 (mp3cut.net) (2).mp3";
audioCollision.src = "audios/collision.mp3";
audio.volume = 0.2;
audioCollision.volume = 0.1;
document.fonts.add(customFont);
const ctx = canvas.getContext("2d");
let gameObj;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  audio.play()
  audio.loop = true;
  // 1 cambiar las pantallas de juego
  startscreenDOM.style.display = "none";
  canvas.style.display = "block";
  // 2 crear los elementos del juego
  gameObj = new Game();
  /*setInterval(() => {
    console.log("algo") // cambiar aceleracion de todos lo elementos actuales, cambiar la aceleracion de todos los nuevos elementos del juego.
  },1000)*/
  // 3 inciar el bucle del juego
  gameObj.gameLoop();
};

const restartGame = () => {
  audio.play()
  audio.loop = true;
  gameOverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};

const addName = () => {
  welcomeDOM.innerHTML = `¿${nameTextDOM.value} are you ready to RIDE?`;
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);
window.addEventListener("keydown", (event) => {
  if (gameObj !== undefined && gameObj.isGameOn === true && event.code === "Space") {
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
});
checkBoxDOM.addEventListener("change", () => {
  if (checkBoxDOM.checked){
    instructionsDOM.style.display = "block";
  }else{
    instructionsDOM.style.display = "none";
  }
});
createNameDOM.addEventListener("click", addName);