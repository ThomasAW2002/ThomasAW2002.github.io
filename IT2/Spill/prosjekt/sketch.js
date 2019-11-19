let spiller;
let astroider = [];
let shots = [];


function setup() {
  // put setup code here
  createCanvas(400, 400);
    spiller = new Spiller();


  for (let i = 0; i < 13; i += 1) {
   astroider[i] = new Astroider;
  }



}


function draw() {
  // put drawing code here
  background(220);
  for(let i = 0; i < shots.length; i += 1){
    if ((shots[i].storrelse + astroider[i].storrelse)/2) {
      astroider.push(new Astroider);
    }
  }
  
  for(let i = astroider.length - 1; i > 0; i -= 1){
    let avstand = dist(shots.y, astroider[i].x, astroider[i].y);
    if(avstand < (shots.storrelse + astroider[i].storrelse) / 2){
      astroider.splice(i,1)
    }
    else {
    astroider[i].tegn();
    astroider[i].move();
    }


  spiller.tegn();
  spiller.move();









  for(let i = 0; i < shots.length; i++){  //Shot løkke
    shots[i].tegn();
    shots[i].move();
    }

  if(spiller.x >= width - 20){  //Barrier
    spiller.x = width - 20;
  }
  else if (spiller.x <= 0) {
    spiller.x = 20 * 0;
  }


}



function keyReleased(){   //Stoppe function
  if(keyCode !== 32){
    spiller.dir = 0;
   }

}

function keyPressed() {      //skyte knapp
  if(keyCode === 32){
    let shot = new Shots(spiller.x, spiller.y);
    shots.push(shot);
  }

  if (keyCode === 39) {     // Høyre og venstre knapp
    spiller.dir = 1;
  }
  else if (keyCode === 37) {
    spiller.dir =-1;
   }
  }
}
