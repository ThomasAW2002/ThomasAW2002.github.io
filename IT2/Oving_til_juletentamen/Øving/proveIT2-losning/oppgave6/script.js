let tall = Math.floor(Math.random() * 20);
let riktig = false;
let antGjett = 0;

let gjett = Number(prompt("Tipp et tall mellom 0 og 20"))

while (!riktig) {
  if (gjett < 0 || gjett > 20) {
    gjett = Number(prompt("Tallet må være mellom 0 og 20, prøv igjen."));
  } else if (gjett < tall) {
    antGjett += 1;
    gjett = Number(prompt("For lavt, prøv igjen."));
  } else if (gjett > tall) {
    antGjett += 1;
    gjett = Number(prompt("For høyt, prøv igjen."));
  } else {
    antGjett += 1;
    alert("Riktig! Du brukte " + antGjett + " forsøk!");
    riktig = true;
  }
}