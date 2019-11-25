let spiller;
let astroider = [];
let shots = [];
let score = 0;
let xpos = 310;
let ypos = 80;



function setup() {
  // put setup code here
  createCanvas(700, 500);
    spiller = new Spiller();




  setInterval(spawn, 5000);







function spawn(){
  for (let j = 0; j < 10; j += 1) {
   astroider[j] = new Astroider;
    }
   }
}


function draw() {
  // put drawing code here
  background(220);
  textSize(20);
      text("Score: " + score, xpos, ypos);

    for(let i = shots.length - 1; i > 0; i -= 1){ // for løkke som går gjennom alle shots fra høyre til venstre, der i blir hvert enkelt shot
      for(let j = astroider.length - 1; j > 0; j -= 1){
       let avstand = dist(shots[i].x, shots[i].y, astroider[j].x, astroider[j].y);
       if(avstand < (shots[i].storrelse + astroider[j].storrelse) / 2){
        astroider.splice(j,1);
        console.log();
        score = score + 1;
     }
   }
 }

  spiller.move();

  if(spiller.x >= width - 20){  //Barrier
    spiller.x = width - 20;
  }
  else if (spiller.x <= 0 + 20) {
    spiller.x = 20;
  }

  spiller.tegn();

  for(let i = 0; i < shots.length; i++){  //Shot løkke
    shots[i].tegn();
    shots[i].move();
    }
  for(let j = astroider.length - 1; j > 0; j-=1){
    astroider[j].tegn();
    astroider[j].move();
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
    console.log();
  }

  if (keyCode === 39) {     // Høyre og venstre knapp
    spiller.dir = 1;
    console.log();
  }
  else if (keyCode === 37) {
    spiller.dir =-1;
    console.log();
   }
  }
