const inpFarge = document.querySelector("#inpFarge") //oppretter en variable som referer til HTML-element


function endreFarge(){
  //oppretter en funksjone som endrer bakgrunnsfarge på hele nettsiden
  document.body.style.transition = "0.8s";//Setter på en liten overgang
  document.body.style.backgroundColor = inpFarge.value;//Endrer bagrunnsfarge
}

inpFarge.oninput = endreFarge;//Knytter funksjonen buttBakgrunn til hendelsen oninput på input-feltet
