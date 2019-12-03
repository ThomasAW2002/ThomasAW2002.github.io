class Astroider{
  constructor(){
    this.x = Math.random() * width;
    this.y = -10; //Math.random() * width / 4;
    this.storrelse = 40;
    this.farge = `white`;

  }

  tegn(){
    circle(this.x, this.y, this.storrelse);
    fill(this.farge);
    stroke(30);
  }




  move(){
   this.y = this.y + 1;
  }


}
