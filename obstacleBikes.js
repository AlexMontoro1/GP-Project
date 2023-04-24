class Obstacle {
    constructor(positionX) {
        this.img = new Image();
        this.img.src = "images/bike-2.png";
        this.x = positionX;
        this.y = 150;
        this.w = 20;
        this.h = 20;
        this.speed = 0.5;
        this.moveToMe = 0.15;
        this.growPart = 0;
      }
      draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };
      moveRight = () => {
        this.y += this.speed;
        this.x += this.moveToMe;
        this.checkPositionForGrow();
      }
      moveLeft = () => {
        this.y += this.speed;
        this.x -= this.moveToMe;
        this.checkPositionForGrow();
      }
      moveFront = () => {
        this.y += this.speed;
        this.moveToMe = 0;
        this.checkPositionForGrow();
      }
      checkPositionForGrow = () => {
        if(this.y > 200 && this.growPart === 0){
          this.w = 30;
          this.h = 30;
          this.speed = 0.7;
          this.moveToMe = 0.2;
          this.growPart = 1;
        }if(this.y > 250 && this.growPart === 1){
          this.w = 40;
          this.h = 40;
          this.speed = 0.9;
          this.moveToMe = 0.25;
          this.growPart = 2;
        }if(this.y > 300 && this.growPart === 2){
          this.w = 60;
          this.h = 60;
          this.speed = 1.1;
          this.moveToMe = 0.3;
          this.growPart = 3;
        }
      }
}