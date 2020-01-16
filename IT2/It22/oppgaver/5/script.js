var btn1 = document.getElementById("btn1");
      var btn2 = document.getElementById("btn2");
      var bilde = document.getElementById("bilde");
      function visBilde(evt){
          var knapp = evt.target;
          var bildefil = knapp.getAttribute("data-bilde");
          bilde.innerHTML='<img src='+bildefil+'>';//Bildefilene må ligge i samme mappe som denne html-fila.
      }
      btn1.onclick = visBilde;
      btn2.onclick = visBilde;
