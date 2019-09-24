//Oppgave 5.1
/*
//Løsning med while
let i = 1; // definerer en global variabel i, skal fungere som telleren

while (i <= 10) { //Så lenge i er indre eller lik 10 skal løkka kjøre
  console.log(i);//Logger konsollen
  i = i + 1;//Legger en til i
  //1 += 1;
  //1++; Disse tre linjene gjør akkurat dett samme
}
/*
for(oppretter en teller; betingelsen, løkka kjører så lenge den er True, hva som skal skje med telleren)
 //koden i løkka
*/
//Løsning med for
/*
for(let i = 0; i <= 10; i += 1){
  console.log(i);
}

*/
/*
//oppgave 5.3
let i = 7;

while(i <= 700){
  console.log(i);
  i = i + 7;
}

let sum = 0;
for(let i = 0; i <= 1000; i += 1){
  sum += i;
}
console.log(sum);
*/

//oppgave 5.4

for(let i = 0; i <= 100; i += 1){
  if(i % 2 === 0){            // !== betyr ikke lik null
    console.log(i);
  }
}
