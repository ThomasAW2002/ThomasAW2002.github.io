const inpVare = document.querySelector("#inpVare");
const inpPris = document.querySelector("#inpPris");
const inpAntall = document.querySelector("#inpAntall");
const handleListe = document.querySelector("#inphandleListe");
const btnB = document.querySelector("#btnB");
const btnS = document.querySelector("#btnS");

let vare = [];



btnB.onclick = leggTil;
btnS.onclik = slett;

function leggTil() {
  vare.push({
    vare: inpVare.value,
    pris: inpPris.value,
    antall: inpAntall.value,
  });

  handleListe.innerHTML = "";

  for (let vare of varer) {
      handleListe.innerHTML += `<li>${vare.navn}: ${vare.pris}: ${vare.antall}</li>`;
    }
    console.log(vare);
}

  function slett(){
    vare.splice({
      vare: inpVare.value,
      pris: inpPris.value,
      antall: inpAntall.value,
    });
  }
