class ObstacleMid extends Obstacle{
    constructor(img,positionX){
        super(img.src);
        this.x = positionX;
        this.y = 250;
        this.w = 30;
        this.h = 30;
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