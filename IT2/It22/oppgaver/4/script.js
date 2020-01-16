const btn1 = document.querySelector("#btn1");
    let btn2 = document.querySelector("#btn2");
    let bilde = document.querySelector("#bilde");
    function visBilde(evt){
        let knapp = evt.target;
        if(knapp.id==="btn1"){
            bilde.innerHTML='<img src="bildefil1.jpg">';//Bildefila må ligge i samme mappe som denne html-fila.
        }
        else{
            bilde.innerHTML='<img src="bildefil2.png">';//Bildefila må ligge i samme mappe som denne html-fila.
        }
    }
    btn1.onclick = visBilde;
    btn2.onclick = visBilde;
