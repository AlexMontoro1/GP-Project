class Lines {
    constructor(){
      this.x = 297;
      this.y = 150;
      this.w = 5;
      this.h = 30;
      this.speed = 0.2
      this.numLines = 5
      this.spaceLines = 0.1
    }
    draw = () => {
        ctx.fillStyle = "white"
        ctx.fillRect(this.x, this.y, this.w, this.h)
      };
      move = () => {
        this.y += this.speed
      }
}   