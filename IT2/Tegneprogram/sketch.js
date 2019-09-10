function setup() {
  // put setup code here
  createCanvas(400, 400);
  background(220);

}

function draw() {
  // put drawing code here
  //background(220);
  let nyX = map(mouseX,0,500,50,100);

  circle(mouseX,mouseY,nyX);
  console.log(mouseX);

   if(mouseIsPressed){
     fill(random(0,255),random(255),random(255));
  background(220);
  }

}
