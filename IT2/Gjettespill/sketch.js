let gjett = Number(prompt("Hvilket tall gjetter jeg på?"));
let tall
let riktig = false;



while(riktig === false){
if(gjett > 100 || gjett < 0){
  gjett =  Number(prompt("Tallet er mellom 0 og 100!"));
}
else if (gjett < tall) {
    gjett =  Number(prompt("For høyt, Prøv igjen?"));
}
else if (gjett > tall) {
    gjett =  Number(prompt("For høyt, Prøv igjen?"));
}
else if (gjett === tall) {
  alert("Gratulerer du vant!")
  riktig = true
}
else {
  gjett =  Number(prompt("Skriv tall mellom 0 og 100!"));
 }
}



function setup() {
  // put setup code here
  createCanvas(400, 400);
  let tall = tall = Math.floor(0,101);

  while(riktig === false){
  if(gjett < tall){
    gjett =  Number(prompt("For lavt, Prøv igjen?"));
  }
  else if (gjett > tall) {
      gjett =  Number(prompt("For høyt, Prøv igjen?"));
  }
  else {
    alert("Riktig! Du vant en Ford Focus!")
    riktig = true;
   }
  }
}

function draw() {
  // put drawing code here




background(220);


}
