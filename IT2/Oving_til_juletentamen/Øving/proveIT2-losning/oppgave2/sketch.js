function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);

  // 2a
  for (let i = 0; i < 25; i += 1) {
    circle(i * 15, 30, 15);
  }

  // 2b
  for (let i = 1; i < 30; i += 1) {
    if (i % 2 == 0) {
      text(i, i * 10, 60);
    }
  }

  // 2b - alternativ løsning
  for (let i = 2; i < 30; i += 2) {
    text(i, i * 10, 100);
  }
}