class Coin {
  constructor(positionX, acceleration) {
    this.img = new Image();
    this.img.src = "images/coin.png";
    this.x = positionX;
    this.y = 130;
    this.w = 10;
    this.h = 10;
    this.speed = 0.9;
    this.moveToMe = 0.2;
    this.growPart = 0;
    this.acceleration = acceleration;
  }
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
  moveRight = () => {
    this.y += this.speed * this.acceleration;
    this.x += this.moveToMe * this.acceleration;
    this.checkPositionForGrow();
  };
  moveLeft = () => {
    this.y += this.speed * this.acceleration;
    this.x -= this.moveToMe * this.acceleration;
    this.checkPositionForGrow();
  };
  moveFront = () => {
    this.y += this.speed * this.acceleration;
    this.moveToMe = 0;
    this.checkPositionForGrow();
  };
  checkPositionForGrow = () => {
    if (this.y > 200 && this.growPart === 0) {
      this.w = 15;
      this.h = 15;
      this.speed = 1.3;
      this.moveToMe = 0.3;
      this.growPart = 1;
    }
    if (this.y > 250 && this.growPart === 1) {
      this.w = 20;
      this.h = 20;
      this.speed = 1.6;
      this.moveToMe = 0.4;
      this.growPart = 2;
    }
    if (this.y > 350 && this.growPart === 2) {
      this.w = 30;
      this.h = 30;
      this.speed = 2;
      this.moveToMe = 0.5;
      this.growPart = 3;
    }
  };
}
