const imgSp = document.querySelector("#imgSp");
const imgMdg = document.querySelector("#imgMdg");
const divInfo = document.querySelector("#divInfo");


imgSp.onclick = visSp;
imgMdg.onclick = visMdg;

function visSp(){
  console.log("Du trykket på SP");
  divInfo.innerHTML = `Navn: Senterpartiet. Antall representanter: 19. Slagord: Vi tror på hele Norge!`
}
function visMdg(){
  console.log("Du trykket på MDG");
  divInfo.innerHTML = `Navn: Miljøpartietdegrønne. Antall representanter: 1. Slagord: Ta vare på fremtiden vår!`
}
