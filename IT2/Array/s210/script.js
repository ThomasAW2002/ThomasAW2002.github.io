//Oppgave 1a
const matListe = document.querySelector("#matListe");
let matvarer = ["ost", "Brød", "Paprika", "kaviar"];

matvarer.sort(sorterAAtilA);

function sorterAAtilA(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) {
    return 1;
  } else {
    return -1;
  }
}

//matvarer.sort(sorterAtilAA);
// function sorterAtilAA(a, b){
//   a = a.toLowerCase();
//   b = b.toLowerCase();
//   if(a > b){
//     return 1;
//   }
//   else {
//     return -1;
//   }
// }


//For løkke som heter hvert element og leggger den i en variable.
for (let vare of matvarer) {
  matListe.innerHTML += `<li>${vare}</li>`;
  //  matListe.innerHTML += "<li>" + vare + "</li>";
  //  console.log(vare);
}

/*
//For-løkker med tall teller
for (let i = 0; i < matvarer.legnth; i += 1){
  matListe.innerHTML += `<li>${matvarer[i]}</li>`;
}


for (let vare in matvarer){
  matListe.innerHTML += `<li>${matvarer[i]}</li>`;
  console.log(vare);
}

*/


//oppgave 3
//a
let temp = [3, 4, 5, 6, 5, 5, 6, 4, 4, 5];

let antall = 0;
let total = 0;

for (let dagTemp of temp) {
  total += dagTemp;
  if (dagTemp < 5) {
    antall += 1;
  }
}

temp.sort(sorterTallLavHoy);

function sorterTallLavHoy(a, b) {
  return a - b;
}

console.log(temp);

console.log("Antall dager under 5 grader: " + antall);

console.log("Gjennomsnittstemp var: " + (total / temp.length));


//Oppgave 4

let personer = [{
    navn: "Thor",
    alder: 33
  },
  {
    navn: "Espen",
    alder: 31
  }
];

//console.log(personer[0].navn) //Henter ut navn på det første objektet i arrayet

personer.sort(sorterAlder);

personer.reverse(); // Snur rekkefølgen på elementene i en array

function sorterAlder(a, b) {
  return a.alder - b.alder;
}

for (let person of personer) {
  console.log(`hei ${person.navn}, du er ${person.alder} år.`)
}
