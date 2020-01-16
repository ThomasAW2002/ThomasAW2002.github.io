const inpTall = document.querySelector("#inpTall");
const btnB = document.querySelector("#btnB");
const divTemp = document.querySelector("#temp")



btnB.onclick = regnUt;
console.log();

function regnUt() {
  let fahrenheit = inpTall.value;
  let celsius = (fahrenheit - 32) * (5/9);
  divTemp.innerHTML = `Temp: ${celsius} grader.`;
}
