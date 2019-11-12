const inpHusk = document.querySelector("#inpHusk");// selecter id
const btnLeggTil = document.querySelector("#btnLeggTil");//selecter id

let huskeliste = [];  //

btnLeggTil.onclick = leggTil;

function leggTil(){
  huskeliste.push(inpHusk.value);
  console.log(huskeliste);
}
