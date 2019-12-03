const startBtn = document.querySelector("#startBtn");
const game = document.querySelector(".game");


let spiller;
let astroider = [];
let shots = [];
let score = 0;
let xpos = 310;
let ypos = 80;
let height = 500
let img;
let bg;


//startBtn.onclick = startGame;


//alert("Welcome to space invaders ish. Right and left arrow to move and space bar to shoot. Do not let any astroides touch the ground or u die. Good luck!");

function setup() {
  // put setup code here
  createCanvas(700, 500);


  spiller = new Spiller();

  bg = loadImage("img/spacegif.gif");
  img = loadImage("img/Spaceship.png");


  if (frameCount % 180 === 0) { // hver 120 det vil si 2 sekunder, kommer 7 astroider til som blir pushet inn i arrayet
    for (let i = 0; i < 3; i += 1) {
      astroider.push(new Astroider);
    }
}



function draw() {
  // put drawing code here
  background(bg);
  textSize(20);
  text("Score: " + score, xpos, ypos);

  for (let i = shots.length - 1; i > 0; i -= 1) { // for løkke som går gjennom alle shots fra høyre til venstre, der i blir hvert enkelt shot
    for (let j = astroider.length - 1; j > 0; j -= 1) { // for løkke som går gjennom alle astroider fra høyre til venstre, der j blir hvert enkelt astroide
      let avstand = dist(shots[i].x, shots[i].y, astroider[j].x, astroider[j].y);
      if (avstand < (shots[i].storrelse + astroider[j].storrelse) / 2) { // avstanden
        astroider.splice(j, 1); //tar vekk den siste i arrayet
        score = score + 1;
      }
    }
  }

  spiller.move();

  if (spiller.x >= width - 62) { //Barrier
    spiller.x = width - 62;
  } else if (spiller.x <= 0 - 5) {
    spiller.x = 0;
  }

  spiller.tegn();

  for (let j = astroider.length - 1; j > 0; j -= 1) {
    astroider[j].tegn();
    astroider[j].move();
  }

  for (let i = 0; i < shots.length; i++) { //Shot løkke
    shots[i].tegn();
    shots[i].move();
  }





  for (let j = astroider.length - 1; j > 0; j -= 1) {
    if (astroider[j].y > height) {// Noen av astroidene som er større enn høyden, så kommer game over og scoren din
      text("GAME OVER ", 250, 180);
      text("Score " + score, 250, 200);
    }
    if (keyPressed = true) {
      location.reload();
    }
  }


  for (let i = 0; i < 3; i += 1) {
    astroider.push(new Astroider);
  }









function keyReleased() { //Stoppe function
  if (keyCode !== 32) {
    spiller.dir = 0;
  }
}





function keyPressed() { //skyte knapp
  if (keyCode === 32) {
    let shot = new Shots(spiller.x, spiller.y);
    shots.push(shot);
  }

  if (keyCode === 39) { // Høyre og venstre knapp
    spiller.dir = 1;
    console.log();
  } else if (keyCode === 37) {
    spiller.dir = -1;
  }
}

}
