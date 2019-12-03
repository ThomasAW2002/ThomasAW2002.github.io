class Shots{
  constructor(x, y){
    this.x = x+30;
    this.y = y;
    this.storrelse = 20;
  }

  tegn(){
    fill("lightblue");
    circle(this.x, this.y, this.storrelse);
    noStroke();
    strokeWeight(5);
  }

  move(){
      this.y = this.y - 15;
  }


}
