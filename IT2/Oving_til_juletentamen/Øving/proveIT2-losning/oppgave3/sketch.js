function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  // 3a
  //rect(mouseX, mouseY, 50, 50);

  // 3b
  if (mouseX < width / 2 && mouseY < height / 2) {
    rect(mouseX, mouseY, 50, 50);
  } else if (mouseX > width / 2 && mouseY < height / 2) {
    circle(mouseX, mouseY, 50);
  } else {
    ellipse(mouseX, mouseY, 50, 25);
  }

}