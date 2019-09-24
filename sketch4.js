function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
if (mouseX < 200 && mouseY < 200){
  ellipse(mouseX, mouseY, 50, 50);
 }
if (mouseX > 200 && mouseY < 200){
  circle(mouseX, mouseY, 30, 50);
 }
if (mouseX > 200 && mouseY > 200){
  rect(mouseX, mouseY, 50, 50);
 }
if (mouseX < 200 && mouseY > 200){
  triangle(380,390,330,320,200,100);
 }

}
