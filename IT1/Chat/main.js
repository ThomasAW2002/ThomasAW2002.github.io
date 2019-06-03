// Referanser til html-elementer
const secMeldinger = document.querySelector("#secMeldinger");
const skjema = document.querySelector("#skjema");
const inpMelding = document.querySelector("#inpMelding");
const btnSend = document.querySelector("#btnSend");
const uteSecMedlinger = document.querySelector("#uteSecmeldinger");

// Globale variabler
let user;

//Sjekke om bruker er logget inn
firebase.auth().onAuthStateChanged(newuser=> {
  if(newUser){
    // Sette user til den innloggede brukeren
    user = newUser;
    // Hendelsesfunksjoner hvis bruker er innlogget
    console.log();
    btnSend.onclick = sendMelding;
    Meldinger.on("child_added",visMelding);
   }
   else{
     secMeldinger.innerHTML = `
     <p>Du er ikke innlogget, logg inn for å se meldinger</p>
     <a href ="login.html">Logg inn her</a>
     `;
   }
})

//Referanser til firebase-databasen
const db = firebase.database();
const Meldinger = db.ref("messengerMeldinger");

//Funksjonsdefinisjoner
function sendMelding(){
  let nyMelding = {
    brukerId: user.emial,
    brukerNavn: user.displayName,
    melding: inpMelding.value
  };

  Meldinger.push(nyMelding);
  console.log("Melding Sendt")
}

function visMelding(snapshot){
  let key = snapshot.key;
  let objekt = snapshot.val();
  secMeldinger.innerHTML += `<p>${objekt.brukerNavn} - ${objekt.brukerMelding}</p>`;
  scrollToBottom();
}






function scrollToBottom(){
  uteSecMeldinger.scrollTop = uteSecMeldinger.scrollToHeight();
}

// Setup/oppstart
