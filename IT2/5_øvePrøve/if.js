//Opgave 2.1
/*
let atll = Number(prompt("Skriv et tall"));

if(tall === 10){
  console.log("Tallet er 10");
}
else {
  console.log("tallet er ikke 10");
}
*/
//Oppgave 2.2
/*
let tall = Number(prompt("Skriv et tall"));

if(tall > 6){
  console.log("tallet er strørre enn 6");
  alert("tallet er strørre enn 6");
}
else {
  console.log("Tallet er midre enn 6");
  alert("Tallet er midre enn 6");
}
*/

//oppgave 2.3
/*
let tall = Number(prompt("Skriv et tall"));

if(tall > 15 || tall < 5 ){
  console.log("");
  alert("Tallet er ikke mellom 5 og 15");
}
else if (tall <15 && tall >5) {
  alert("Tallet er mellom 5 og 15");
}
*/

//Oppgave 3.1
/*
let tall1 = Number(prompt("Skriv lengden"));
let tall2 = Number(prompt("Skriv høyden"));
alert("Arealet er " + tall1 * tall2);
*/

//Oppgave 3.2
let figur = prompt("Velg enten firkant eller sirkel");

if(figur === "firkant"){
  let tall1 = Number(prompt("skriv lengde"));
  let tall2 = Number(prompt("Skriv høyde"));
  alert("Arealet er " + tall1 * tall2);
}
else if (figur === "sirkel"){
  let radius = Number(prompt("Skriv radius"));
  alert("Arealet ditt er " + Math.PI * r*r);
}
