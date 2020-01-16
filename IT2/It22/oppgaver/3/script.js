const btn = document.querySelector("#btn");
        let visBilde = document.getElementById("visBilde");
        btn.onclick = function(){
            visBilde.innerHTML='<img src="bildefil.jpg">';//Bildefila må ligge i samme mappe som denne html-fila.
        }
