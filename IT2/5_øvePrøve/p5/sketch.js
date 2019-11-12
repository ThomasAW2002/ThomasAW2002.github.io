let figur = prompt("Areal eller Omkrets")

if (figur === "omkrets" || figur === "Omkrets") {
  let tall1 = Number(prompt("Skriv høyde"))
  let tall2 = Number(prompt("Skriv Bredde"))
  alert("omkretsen er "  + 2*(tall1 + tall2))
}
else if (figur === "Areal" || figur === "areal") {
  let tall1 = Number(prompt("Skriv høyde"))
  let tall2 = Number(prompt("Skriv Bredde"))
  alert("Arealet er "  + Number(tall1) * Number(tall2))
}
