let x = 40;
let y = 40;
let speedX = 6;
let speedY = 6;
let img;
function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  img = loadImage('dvd.png');
}

function draw() {
  // put drawing code here
    background(220);
  image(img,x,y,160,80);
  y += speedY;
  x += speedX;
if (y>= windowHeight-80){
  speedY = -speedY;
  randomColor();
}
else if (y<= 0){
  speedY = -speedY;
  randomColor();
}
if (x>= windowWidth-160){
  speedX = -speedX;
  randomColor();
}
else if (x<= 0){
  speedX = -speedX;
  randomColor()
}
}
function randomColor(){
  tint(random(255),random(255),random(255));
}
