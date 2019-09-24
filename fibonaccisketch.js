function setup() {
  // put setup code here
  createCanvas(400, 400);
  noLoop();

  let a = 1 // Oppretter en variable som skal  holde tallet før den forrige tallet
  let b = 1// Oppretter en variable som skal holde det forrige tallet
  for(let i = 0; i < 100; i = i +1){
    let c = a + b// C = de forrige tallene
    text(c, i*20, i*20);
    a = b;
    b = c;

 }
}

function draw() {
  // put drawing code here



}
