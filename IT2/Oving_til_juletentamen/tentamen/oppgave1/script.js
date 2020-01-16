const inpAlder = document.querySelector("#inpAlder");
const inpAlder2 = document.querySelector("#inpAlder2");
const btnB = document.querySelector("#btnB");


btnB.onclick = regnUt;



function regnUt(){
let alder = Number(inpAlder.value) + Number(inpAlder2.value);
if(alder < 4){
  alder = alder;
  console.log("Barn på tilsammen " + alder + " år kommer inn gratis");
}
else if(alder > 4 && alder < 18){
  alder = alder;
  console.log("Med alderen "+ alder + " år må man betale barnebillet")
}
else if (alder > 18){
  alder = alder;
  console.log("Med alderen " + alder + " år må man betale voksenbillett")
}
}
