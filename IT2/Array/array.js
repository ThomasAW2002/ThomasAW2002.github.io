//Array (lister)

//Definiere en Array

let minArray = ["Thor","Per","Pål",23];

// Hente ut en verdi fra et Array
console.log(minArray[1]); //Per

//legge til verdi i Array
minArray.push("Kong Harald");
console.log(minArray);

//Fjerne en verdi fra et array
minArray.splice(1,1); // .splice() fjerner verdier fra et array, det første tallet er startposisjonen og det andre er den som skal fjernes
console.log(minArray);

//Sortere arrays

let bokstaver = ["q","c","a","t"]
bokstaver.sort(sorterAlfabetisk);
console.log(bokstaver);

function sorterAlfabetisk(a,b){
a = a.toLowerCase();
b = b.toLowerCase();
 if (a > b) {
   return 1;
  }
  else {
   return -1;
  }
}

// Sortere tall
let mineTall = [7,2,5,19,1];
mineTall.sort(mineTall);
console.log(mineTall);

function tall(a, b){
  return a - b;
}
