
let gjett = Number(prompt("Gjett tallet mellom 0 og 20?"));
let tall;
let riktig = false;
let galt = 0


  tall = Math.floor(Math.random()*20);
  while(riktig === false){
    if(gjett > 20 || gjett < 1){
      galt = galt + 1
      gjett = Number(prompt("Tallet må være mellom 0 og 20!"));
    }
    else if(gjett < tall){
      gjett = Number(prompt("For lavt, prøv igjen"));
      galt = galt + 1
    }
    else if (gjett > tall) {
      gjett = Number(prompt("For høyt, prøv igjen"));
      galt = galt + 1
    }
    else if (gjett === tall) {
      alert("Gratulerer du vant! antall gjett: " +galt)
      riktig = true;
    }
    else{
      gjett = Number(prompt("Skriv tall mellom 1 og 20!"));
    }
  }
