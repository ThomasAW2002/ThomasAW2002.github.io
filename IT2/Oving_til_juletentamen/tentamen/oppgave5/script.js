const inpAd = document.querySelector("#inpAd");
const inpT = document.querySelector("#inpT");
const inpM = document.querySelector("#inpM");
const inpP = document.querySelector("#inpP");
const btnB = document.querySelector("#btnB");


let img2 = document.getElementById("imgM2")
let img3 = document.getElementById("imgM3")



btnB.onclick = regnUt;


function regnUt(){
  let inpP = 80
  Number(inpP) + Number(inpM); 
}

if(inpM ===2){
  takk();
  document.getElementById("img2").src="Matkasse2.png"
} else if (inpM === 3) {
  takk();
  document.getElementById("img3").src="Matkasse3.png"
}
function takk(){
  <p>Tusen takk for bestillingen</p>
}
