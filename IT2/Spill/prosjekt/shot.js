class Shots{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.storrelse = 20
    this.slett = false;
  }

  tegn(){
    fill("black");
    circle(this.x, this.y, this.storrelse);
    noStroke();
  }

  slett(){
    this.slett = true;
  }

  hits(){

}

  move(){
      this.y = this.y - 15;
  }


}
