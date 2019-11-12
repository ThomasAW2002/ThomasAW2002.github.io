const inpTemp = document.querySelector("#inpTemp");
const btnTemp = document.querySelector("#btnTemp");
const divTemp = document.querySelector(".divTemp");
const sortering = document.querySelector("#sortering");

let temperaturer = [];

btnTemp.onclick = registrerTemp;
sortering.onchange = function(){
  nySortering();
  skrivUtTemp();
}

function registrerTemp() {
  temperaturer.push(Number(inpTemp.value)); //pusher temperaturen i input-feltet til arrrayen temperaturer
  nySortering(); //  Sorterer temperaturer-arrrayen avhenging av verdien i sortering-select
  skrivUtTemp(); // skriver ut temperaturene på siden


}

function nySortering() {
  if (sortering.value === "LavTilHoy") {
    temperaturer.sort(tallLavTilHoy);
  } else if (sortering.value === "HoyTilLav") {
    temperaturer.sort(tallHoyTilLav);
  }
}

function skrivUtTemp() {
  divTemp.innerHTML = ``;
  for (let temp of temperaturer) {
    if (temp > 0) {
      divTemp.innerHTML += `
        <div class="soyle positiv" style="height:${temp * 10 + 200}px">${temp}</div>
     `;
    }
    else if (temp == 0) {
      divTemp.innerHTML += `
        <div class="soyle noytral" style="height:${temp * 10 + 200}px">${temp}</div>
     `;
   }
     else {
      divTemp.innerHTML += `
        <div class="soyle negativ" style="height:${temp * 10 + 200}px">${temp}</div>
     `;
    }
  }
}
//sorteringsfunksjoner

function tallLavTilHoy(a, b) {
  return a - b;
}

function tallHoyTilLav(a, b) {
  return b - a;
}
