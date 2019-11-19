class Spiller{
  constructor(){
    this.x = width/2;
    this.xdir = 0;
    this.size = 40;
    this.y = height - this.size;
    this.dir = 0;
}

    tegn(){
     fill("black");
     rectMode(CENTER);
     rect(this.x, height-40, this.size, this.size);
    }

    move(){
     this.x += this.dir*5;
    }
}
