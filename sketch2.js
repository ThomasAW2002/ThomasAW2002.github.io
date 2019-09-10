
let beginX = 20; // Initial x-coordinate
let beginY = 550; // Initial y-coordinate
let endX = 1300; // Final x-coordinate
let endY = 600; // Final y-coordinate
let distX; // X-axis distance to move
let distY; // Y-axis distance to move
let exponent = 20; // Determines the curve
let x = 0.0; // Current x-coordinate
let y = 0.0; // Current y-coordinate
let step = 0.01; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)

function setup() {
  createCanvas(1300,600);
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
  rect(30,550,80,40,20);
  arc(20,400,100,100, PI + QUARTER_PI, CHORD);



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
