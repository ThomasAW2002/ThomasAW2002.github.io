//---Funksjoner---

// 2 grunner til å bruke funksjoner
// 1. Oppdeling av kode
// 2. Gjenbruk av kode

//---Skrivemåte--

//Funksjondefinisjon
function siHei(){
  console.log("Hei!")
}

//Funksjonskall
siHei();

// ---Hendelser---

window.onclick = siHei;   //Uten parantes i hendelser

const overskrift1 = document.querySelector("#overskrift1");
const tekst2= document.querySelector("#tekst2");

overskrift1.onclick = byttTekst1;
tekst2.onclick = byttTekst2;

function byttTekst1(){
  overskrift1.innerHTML += `Hei på deg`;
}
function byttTekst2(){
  let navn = "Thomas";
  tekst2.innerHTML += `
<div>
Hei på deg ${navn}!
</div>
  `;
}
