//alert("Javascript er lastet");

let mittTall = 23;

//output
console.log(mittTall); //console.log(variabel); logger i consolen
console.log("Mitt tall er", mittTall);
alert("Mitt tall er" + (mittTall + 52)); // alert variable lager en pop-up boks med en beskjed i consolen


//input
let brukersTall = Number(prompt("Skriv et tall"));//Lager en prompt-boks hvor brukeren an skrive inn et tall, gjør dette tallet om til et tall med Number("text")
let brukersTall2 = Number(prompt("Skriv et annet tall"));

console.log(brukersTall + brukersTall2);

//enke datatyper
let tall = 25; //Datatypen number
let desimaltall = 25.7; // Datatypen number

let tekst = "Hallo dette er en tekst"; // Datatypen string
let tekst2 = "42"; // dette er også en string, vi må huske å konvertere det til en number

let tall3 = Number(tekst2); // Datatypen number

let bool1 = True; //Datatypen boolean
let bool2 = False; // Datatypen boolean

// Indekserte variabler / indekserte datatyper

let mittObjekt = {
  navn: "YOLO",
  alder: 69,
  yrke: "yeet"
}

let minListe = ["Thor","Ravi","Frederik",26,27,True,mittObjekt];
