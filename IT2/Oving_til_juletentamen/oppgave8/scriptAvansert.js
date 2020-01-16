const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");

const partier = [
  {
    navn: "SP",
    representanter: 19,
    slagord: "Vi tror på hele Norge!"
  },
  {
    navn: "MDG",
    representanter: 1,
    slagord: "Ta vare på fremtiden!"
  }
];


imgSp.onclick = function(){
  visParti("SP";)
}
imgMdg.onclick = function(){
  visParti("MDG";)
}

function visParti(partiNavn){
  for(let i = 0; i < partier.length; i += 1){
    if(partiNavn === parti[i].navn){
      dinInfo.innerHTML = `Navn: ${partier[i].navn}. Representanter: ${partier[i].representanter}. Slagord: ${partier[i].slagord}`;
    }
  }
}


function visPartiForOf(partiNavn){
  for(let parti of partier){
    if(partiNavn === parti.navn){
      dinInfo.innerHTML = `Navn: ${partier.navn}. Representanter: ${partier.representanter}. Slagord: ${partier.slagord}`;
    }
  }
}
