class Spiller{
  constructor(){
    this.x = width/2;
    this.xdir = 0;
    this.size = 60;
    this.y = height - this.size - 5;
    this.dir = 0;
}

    tegn(){
     fill("white");
     //rectMode(CENTER);
     image(img, this.x, height-70, this.size, this.size);
    }

    move(){
     this.x += this.dir*10;
    }

}
