class Lines {
  constructor(positionY, acceleration) {
    this.x = 297;
    this.y = positionY;
    this.w = 2;
    this.h = 10;
    this.speed = 0.9;
    this.growPart = 0;
    this.acceleration = acceleration;
  }
  draw = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  move = () => {
    this.y += this.speed * this.acceleration;
  };
  checkPositionForGrow = () => {
    if (this.y > 180 && this.growPart === 0) {
      this.w = 4;
      this.h = 15;
      this.speed = 1.3;
      this.growPart = 1;
    } else if (this.y > 300 && this.growPart === 1) {
      this.w = 6;
      this.h = 20;
      this.speed = 1.6;
      this.growPart = 2;
    } else if (this.y > 400 && this.growPart === 2) {
      this.w = 8;
      this.h = 30;
      this.speed = 2;
      this.growPart = 3;
    }
  };
}
