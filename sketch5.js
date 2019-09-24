let xPos = 30;
let yPos = 30;
let xSpeed = 10;

function setup() {
  // put setup code here
  createCanvas(600,400);

}

function draw() {
  // put drawing code here
  background(220);
  ellipse(xPos,yPos,50,50);

  xPos = xPos + xSpeed;
  yPos = yPos + xSpeed;


  if (xPos > windowHeight){
    xSpeed = -10;
  }

  if (yPos > windowWidth){
    xSpeed = -10;
  }

}
