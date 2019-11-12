let figur = prompt("*,/,+ eller -")

if(figur = "*") {
  let tall1 = Number(prompt("Skriv inn tallet du vil gange"));
  let tall2 = Number(prompt("Skriv inn tallet du vil gange"));
  alert("Det er " + tall1 * tall2)
}
else if (figur = "/") {
  let tall1 = Number(prompt("Skriv inn tallet du vil dele"));
  let tall2 = Number(prompt("Skriv inn tallet du vil dele"));
  alert("Det blir " + tall1 / tall2)
}
else if (figur = "/") {
  let tall1 = Number(prompt("Skriv inn tallet du vil plusse"));
  let tall2 = Number(prompt("Skriv inn tallet du vil plusse"));
  alert("Det blir " + tall1 + tall2)
}
else if (figur = "-" ) {
  let tall1 = Number(prompt("Skriv inn tallet du vil minske"));
  let tall2 = Number(prompt("Skriv inn tallet du vil minske"));
  alert("Det blir " + tall1 - tall2)
}
