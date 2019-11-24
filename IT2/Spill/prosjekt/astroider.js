class Astroider{
  constructor(){
    this.x = Math.random() * width;
    this.y = Math.random() * width / 4;
    this.storrelse = 15;
    this.farge = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`;
    this.slett = false;
  }

  tegn(){
    circle(this.x, this.y, this.storrelse);
    fill(this.farge);
    stroke(30);
  }

  slett(){
    this.slett = true;
  }


  move(){
   this.y = this.y + 1;
  }


}
