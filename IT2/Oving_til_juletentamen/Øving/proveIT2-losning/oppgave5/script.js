let regneoperasjon = prompt("Hvilken regneoperasjon vil du gjennomføre? (+,-,*,/)");
let tall1 = Number(prompt("Skriv tall nr. 1"));
let tall2 = Number(prompt("Skriv tall nr. 2"));

if (regneoperasjon === "+") {
  alert(`${tall1} + ${tall2} = ${tall1 + tall2}`); // Bruker string literal, fordi det er litt enklere. Kunne også brukt vanlig string.
} else if (regneoperasjon === "-") {
  alert(`${tall1} - ${tall2} = ${tall1 - tall2}`);
} else if (regneoperasjon === "*") {
  alert(`${tall1} * ${tall2} = ${tall1 * tall2}`);
} else if (regneoperasjon === "-") {
  alert(`${tall1} / ${tall2} = ${tall1 / tall2}`);
} else {
  alert("Du må skrive +, -, * eller /");
}