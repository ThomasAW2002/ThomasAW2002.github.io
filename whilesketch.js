function setup() {
  createCanvas(400, 400,);
}

function draw() {
  //background(255);
  background(220);

  let x = 10;
  let y = 10;

  while (x < 100) {
    circle(x,10,25);
    x = x + 10;
    y = y + 10;
  }

  while (y < 1000) {
    circle(10,y,25);
    y = y + 10;
  }

  for(let x = 10, y = 10; x < 1000; x = x + 10, y = y + 10){
    circle(x,y,25);
  }
}

let l = 1;

while (l <= 10 ) {
  console.log(l*1)
  line(10,50,90,10);
  l = l + 1
}

  let gange = 1;

  while (gange <= 10) {
    console.log(gange*8);
    gange = gange + 1;
  }
