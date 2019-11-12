let tall1 = Number(prompt("Skriv antall poeng besvarelse"))
let tall2 = Number(prompt("Skriv antall mulige poeng"))

alert("Karakteren din er " + Math.floor((tall1 / tall2) *6))

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(220);
}
