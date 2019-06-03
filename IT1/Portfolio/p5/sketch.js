let x = 200
let y = 50
let retningX = 1;
let retningY = 1;
let fart = 10;
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // put drawing code here
  clear()

fill(random(390),random(390),random(390),random(390))
if(x>window.innerWidth-25){
  retningX = -1;
}
else if (x<0) {
  retningX = 1;
}
if(y>window.innerHeight-25){
  retningY = -1;
}
else if (y<0) {
  retningY = 1;
}
x = x + retningX*fart;
y = y + retningY*fart;
ellipse(x,y,100,100)
// fill(random(255),random(255),random(255),random(255))
  //rect(20,20,20,20);
  //rect(30,30,20,20);
  //rect(40,40,20,20);
  //ellipse(20,20,20);
  //ellipse(mouseX,mouseY,40,40);
}
