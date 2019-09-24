function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  for(let i = 0; i < 10; i += 1){
    ellipse(i * 40,25,50);
  }
}
