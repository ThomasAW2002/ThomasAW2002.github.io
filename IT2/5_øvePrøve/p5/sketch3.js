let radius = Number(prompt("Skriv radius her"))

alert("omkretsen din er " + 2*(Math.floor(Math.PI*radius)))
alert("Volumet er " + 4*(Math.floor(Math.PI*(Math.pow(radius,3)/(3)))))
alert("Arealet av overflaten " + 4*(Math.floor(Math.PI*(Math.pow(radius,2)))))

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(220);
}
