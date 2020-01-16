const btnInn = document.querySelector("#btnInn");
        let tekstUt = document.querySelector("#tekstUt");
        let antall = 298;
        btnInn.onclick = function(){
            if(antall<300){
                antall++;
                tekstUt.innerHTML="Det er nå "+antall+" elever i lokalet";
            }
            else{
                tekstUt.innerHTML="Det er nå "+antall+" elever i lokalet";
            }
        }
