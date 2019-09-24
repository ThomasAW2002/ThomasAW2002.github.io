function setup() {
  createCanvas(400, 400,);
}

function draw() {
  //background(255);
  background(220);

  for(let x = 10, y = 10; x < 100; x = x + 10, y = y + 10){
    circle(x,y,25);
  }
