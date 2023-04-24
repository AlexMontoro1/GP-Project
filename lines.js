class Lines {
  constructor(positionY) {
    this.x = 297;
    this.y = positionY;
    this.w = 2;
    this.h = 10;
    this.speed = 0.9;
    this.growPart = 0;
  }
  draw = () => {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.w, this.h);
  };
  move = () => {
    this.y += this.speed;
  };
  checkPositionForGrow = () => {
    if (this.y > 200 && this.growPart === 0) {
      this.w = 2.5;
      this.h = 12.5;
      this.speed = 1.3;
      this.growPart = 1;
    } else if (this.y > 300 && this.growPart === 1) {
      this.w = 3.5;
      this.h = 15;
      this.speed = 1.6;
      this.growPart = 2;
    } else if (this.y > 400 && this.growPart === 2) {
      this.w = 4.5;
      this.h = 25;
      this.speed = 2;
      this.growPart = 3;
    }
  };
}
