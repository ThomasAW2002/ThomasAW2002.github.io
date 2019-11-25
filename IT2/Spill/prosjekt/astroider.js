class Astroider{
  constructor(){
    this.x = Math.random() * width;
    this.y = Math.random() * width / 4;
    this.storrelse = 28;
    this.farge = `black`;

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
