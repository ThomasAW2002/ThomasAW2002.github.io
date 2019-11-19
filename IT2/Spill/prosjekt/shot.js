class Shots{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.storrelse = 20
  }

  tegn(){
    fill(150, 0, 200);
    circle(this.x, this.y, this.storrelse);
    noStroke();
  }

  move(){
      this.y = this.y - 15;
  }
}
