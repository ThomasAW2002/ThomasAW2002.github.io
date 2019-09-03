let xPos = 200;
let yPos = 50;
let yFart =1;
let xHinder = innerWidth;
let hinderH = 300;
let hinderB = 50

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(innerWidth,innerHeight);
}

function draw() {
  // put drawing code here
  background("blue");
  ellipse(xPos,yPos,50,25);
  rect(xHinder,0,hinderB,hinderH)
  rect(xHinder,innerHeight-hinderH,hinderB,hinderH)
  fill("green");
  yPos = yPos + yFart;
  yFart = yFart + 1

  xHinder = xHinder -10;

  if(xHinder<0-50){
    xHinder = innerWidth;
  }
  if(xPos > xHinder && xPos < xHinder + hinderB && yPos < hinderH){
    alert("Du er død!")
  }
  if(xPos > xHinder && xPos < xHinder + hinderB && yPos > innerHeight-hinderH){
    alert("Du er død!")
  }
}

window.onkeydown = hopp;
function hopp(){
  yFart = -15;
}
