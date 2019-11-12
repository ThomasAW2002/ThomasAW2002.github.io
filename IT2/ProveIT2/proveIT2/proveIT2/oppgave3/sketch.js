function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(220);

if (mouseX > 200){
  ellipse(mouseX,mouseY,50,50)
}
else if (mouseY > 200 && mouseX > 200) {
  rect(mouseX, mouseY,50,50)
}
else if (mouseX > 200 ) {
  circle(mouseX, mouseY,50,50)
 }
}
