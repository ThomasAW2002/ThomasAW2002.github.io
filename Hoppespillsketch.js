let figur = {   //figur og egenskapene til figuren
  x: 50,
  y: 50,
  xFart: 0,
  yFart: 5,
  hoyde: 25,
  bredde: 25,
  hopp: 50
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 background(220);

figur.x = figur.x + figur.xFart;
figur.y = figur.y + figur.yFart;

if(figur.y > height){
  text("Du er død",width/2 ,height/2);
  noLoop();
}

 rect(figur.x,figur.y,figur.bredde,figur.hoyde);

}

window.onkeydown = hopp;


function hopp(event){
  if(event.key === "ArrowUp"){
  figur.y = figur.y - figur.hopp;
  figur.yFart = figur.yFart + 1;
 }
 else if(event.key === "Enter"){
   location.reload();
 }
}
