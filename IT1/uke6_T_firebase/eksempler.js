console.log("Script er lastet");

//Oppretter variabler som referer til databasen
const db = firebase.database();
const bloggere = db.ref("bloggere")

//Pushet en string til databasen, firebase lager primærnøkkelen
bloggere.push("Sophie Elise")
//Pushet et objekt til databasen, firebase lager primærnøkkelen
bloggere.push({
  "navn":"Komikerfrue",
  "folgere":59000
});

const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set({
  "navn":"Peppa Gris",
  "folgere": 2000000
});

//Lagde et objekt med egen primærnøkkel
const storePappahjerte = bloggere.child("pappahjerte");
storePappahjerte.set({
  "navn":"Kåre Kånradi",
  "folgere":50
});
//Oppdaterer objektet pappahjerte med nytt navn
storePappahjerte.update({
  "navn":"Hans Olav Lahlum"
});
