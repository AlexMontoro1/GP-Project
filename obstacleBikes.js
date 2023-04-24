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
      }
      draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      };
      moveRight = () => {
        this.y += this.speed;
        this.x += this.moveToMe;

      }
      moveLeft = () => {
        this.y += this.speed;
        this.x -= this.moveToMe;
      }
}