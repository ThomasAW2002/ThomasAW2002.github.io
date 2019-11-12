let tre = ["lønn","hassel","bjørk","eik","blodlønn","furu","gran"];


tre.splice(3,1);
tre.splice(4,2);

tre.push("hengebjørk");
tre.unshift("fjellbjørk","dvergbjørk");

//Array (lister)

//Definiere en Array

function alfabetisk(a, b){
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
tre.sort(alfabetisk);
console.log(tre);
