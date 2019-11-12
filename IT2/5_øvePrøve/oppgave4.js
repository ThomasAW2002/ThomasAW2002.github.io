let riktig = 0;

let svar1 = prompt("Hvem er den beste læreren?");
if(svar1 === "Thor" || svar1 === "thor"){
  riktig = riktig + 1;
  alert("riktig! Thor er skikkelig bra lærer!")
}
else{
  alert("Nei nei nei! Han er kjempegod!")
  galt = galt + 1;
}

let svar2 = prompt("Hva er hovedstaden i Mongolia?")
if(svar2 === "Ulan Bataar"){
  riktig = riktig + 1;
  alert("Du er kjempeflink i geografi, du får karakter 6!")
}
else{
  alert("NEI! DET MÅ DU VITE!!")
  galt = galt + 1;
}

alert("Du fikk: "+riktig+" poeng.")
