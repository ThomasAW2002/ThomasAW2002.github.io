
let beginX = 700.0; // Initial x-coordinate
let beginY = 350.0; // Initial y-coordinate
let endX = 10.0; // Final x-coordinate
let endY = 10.0; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 5; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(0, 4);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(255);
  ellipse(x, y, 20, 20);
  rect(20,350,80,40,20);
  arc()



}

function mousePressed() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
