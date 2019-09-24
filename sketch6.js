let x;
let y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100,150,200);
}

function draw() {
  x = random(0,width); // setter x til å være et tilfeldig tall mellom 0 og bredden til canvaset
  y = random(0,height); // setter x til å være et tilfeldig tall mellom 0 og bredden til canvaset



  if(x < width/2 &&  y < height/2){
    fill(blue);
    circle(x,y,25);
  }
  else if{(x < width/2 && y > height/2){
    fill(green);
    triangle(x,y,x+20,y,x+5,y-20);
  }
  else if (x > width/2 && y > height/2){
    fill(red);
    ellipse(x,y,20,10);
  }
  else {
    fill(yellow);
    rect(x,y,25,25);
  }
}
