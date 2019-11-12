//sorteringsfunksjoner
function tallLavTilHoy(a, b) {
  return a - b;
}

function tallHoyTilLav(a, b) {
  return b - a;
}
let ord = ['xbbCs','yAbbw','aaa'];

function bokstaverAtilAA(a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) {
    return 1;
  }
  else {
    return -1
  }
}

//Sortere objekter
//OBS!Her kan vi ikke bare klippe og lime. Her må du vite hvilken egenskap vi skal sortere
let personer = [
  {navn:"Thor",
  alder: 28
},
{
  navn: "Espen",
  alder: 30
}
];

function sorterObjektpersoner(a, b){
  return a.alder -b.alder;
}
