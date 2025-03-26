//Faciles:
// Créez une fonction bonjour() qui affiche "Bonjour !" avec console.log().
// Créez une fonction addition(a, b) qui retourne la somme de deux nombres, et testez-la.
// Appelez addition(3, 5) et affichez le résultat dans la console.
function bonjour() {
  return "Bonjour!";
}
// console.log(bonjour());
function addition(a, b) {
  return a + b;
}
// console.log(addition(3,5))

// Moyens
// Créez une fonction estPair(nombre) qui retourne true si le nombre est pair (nombre % 2 === 0), et testez-la.
// Créez une fonction factorielle(n) qui calcule la factorielle d’un nombre (ex. 5! = 54321) avec une boucle.
// Créez une fonction maximum(a, b) qui retourne le plus grand des deux nombres avec if.
// Créez une fonction bienvenue(nom) qui affiche "Bienvenue, [nom] !", et testez-la avec votre nom.
function estPair(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(estPair(4))

function factorielle(n) {
  if (n < 0) {
    return "la factorille ne doit pas etre negatif";
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorielle(5));

function maximum(a,b){
    if(a - b > 0){
        return "a sup de b"
    }else if(a - b < 0){
        return " a est infer de b"
    }else{
        return " a = b"
    }
}
// console.log(maximum(3 , 8));



