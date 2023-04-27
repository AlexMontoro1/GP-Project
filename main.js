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
const scoreResultDOM = document.querySelector("#score-result");
const muteCheckBoxDOM = document.querySelector("#mute");
const muteButtonDOM = document.querySelector("#mute-button");
const unMuteButtonDOM = document.querySelector("#unmute-button");
const customFont = new FontFace(
  "fuente",
  "url(3x5/game-played-font/GamePlayed-vYL7.ttf)"
);
const audio = new Audio();
const audioCollision = new Audio();
audio.src = "audios/motorcycle-ride-01 (mp3cut.net) (2).mp3";
audioCollision.src = "audios/collision.mp3";
audio.volume = 0.1;
audioCollision.volume = 0.1;
document.fonts.add(customFont);
const ctx = canvas.getContext("2d");
let gameObj;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  audio.play();
  audio.loop = true;
  // 1 cambiar las pantallas de juego
  startscreenDOM.style.display = "none";
  canvas.style.display = "block";
  muteButtonDOM.style.display = "block";
  // 2 crear los elementos del juego
  gameObj = new Game();
  // 3 inciar el bucle del juego
  gameObj.gameLoop();
};

const restartGame = () => {
  audio.play();
  audio.loop = true;
  gameOverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  muteButtonDOM.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};

const addName = () => {
  welcomeDOM.innerHTML = `¿${nameTextDOM.value} are you ready to RIDE?`;
};

const scoreResult = () => {
  scoreResultDOM.innerHTML = `${nameTextDOM.value} you get ${gameObj.score} COINS!!`;
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);
window.addEventListener("keydown", (event) => {
  if (
    gameObj !== undefined &&
    gameObj.isGameOn === true &&
    event.code === "Space"
  ) {
    gameObj.isGameOn = false;
    audio.pause();
  } else if (
    gameObj !== undefined &&
    gameObj.isGameOn === false &&
    event.code === "Space"
  ) {
    gameObj.isGameOn = true;

    gameObj.gameLoop();
    audio.play();
  }
});
canvas.addEventListener("mousemove", (event) => {
  if (gameObj !== undefined) {
    mouseX = event.offsetX;
    if (mouseX > canvas.width - 530 && mouseX < canvas.width - 130) {
      gameObj.bike.x = mouseX;
    }
  }
});
checkBoxDOM.addEventListener("change", () => {
  if (checkBoxDOM.checked) {
    instructionsDOM.style.display = "block";
  } else {
    instructionsDOM.style.display = "none";
  }
});
muteCheckBoxDOM.addEventListener("change", () => {
  if (muteCheckBoxDOM.checked) {
    muteButtonDOM.style.display = "none";
    unMuteButtonDOM.style.display = "block";
    audio.volume = 0;
    audioCollision.volume = 0;
  } else {
    muteButtonDOM.style.display = "block";
    unMuteButtonDOM.style.display = "none";
    audio.volume = 0.1;
    audioCollision.volume = 0.1;
  }
});
muteCheckBoxDOM.addEventListener("keyup", (event) => {
  event.preventDefault();
});
createNameDOM.addEventListener("click", addName);
