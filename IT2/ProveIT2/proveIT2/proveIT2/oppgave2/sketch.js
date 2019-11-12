
function setup() {
  // put setup code here
  createCanvas(windowHeight, windowWidth);

}

function draw() {
  // put drawing code here
  background(220);
  for(let i = 0; i < 25; i += 1){
    ellipse(i * 20,30,50);
  }
}
