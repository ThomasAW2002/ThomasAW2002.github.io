const inpPris = document.querySelector("#inpPris");
const inpRabatt = document.querySelector("#inpRabatt");
const btnB = document.querySelector("#btnB");


btnB.onclick = regnUt;



function regnUt(){
let pris = inpPris.value;
let rabatt = inpRabatt.value;
let svar = ((100 - rabatt)/100)*pris;
console.log(svar);
}
