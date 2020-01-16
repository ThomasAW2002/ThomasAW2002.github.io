const btnB = document.querySelector("#btnB");
const inpPris = document.querySelector("#inpTall");




btnB.onclick = regnUt;



function regnUt(){
let pris = inpPris.value;
if(pris < 350){
  pris = pris;
  console.log("Ikke endring " + pris);
}
else{
  pris = pris*1.25 + 158;
  console.log("Ny pris " + pris)
}
}
