class Bike {
  constructor() {
    this.img = new Image();
    this.img.src = "images/bike-1.png";
    this.x = 265;
    this.y = 520;
    this.w = 70;
    this.h = 70;
  }
  draw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
