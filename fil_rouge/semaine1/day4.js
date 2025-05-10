//Faciles:
// Créez une fonction bonjour() qui affiche "Bonjour !" avec console.log().
// Créez une fonction addition(a, b) qui retourne la somme de deux nombres, et testez-la.
// Appelez addition(3, 5) et affichez le résultat dans la console.
function bonjour() {
  return "Bonjour!";
}
console.log(bonjour());

function addition(a, b) {
  return a + b;
}
console.log(addition(3,5))

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
console.log(estPair(4))

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
console.log(factorielle(5));

function maximum(a,b){
    if(a - b > 0){
        return "a sup de b"
    }else if(a - b < 0){
        return " a est infer de b"
    }else{
        return " a = b"
    }
}
console.log(maximum(3 , 8));

function bonjour(name){
  return "salut " + name;
}
console.log(bonjour("mouad"));

// Créez une fonction sommeTableau(tableau) qui prend un tableau de nombres et retourne leur somme avec une boucle.
// Créez une fonction inverserChaine(chaine) qui retourne la chaîne inversée (ex. "abc" → "cba") avec une boucle ou split().
// Créez une fonction estPalindrome(chaine) qui vérifie si une chaîne est un palindrome (ex. "radar") et retourne true ou false.
function sometableau(table){
  let some = 0;
  for(let i=0 ; i<=table.length ;i++){
    some += i;
  }
  return some;
}
let table = [1,2,3,4,5];
console.log(sometableau(table));
//
function inversse(string){
  let newstring = '';
  for(let i=string.length - 1 ; i >= 0; i--){
    newstring += string[i]
  } 
  return newstring;    
}
let string1 = "abc"
console.log(inversse(string1));
//
function estPalindrome(string) {
  let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString === string;
}
console.log(estPalindrome('abc')); 
console.log(estPalindrome('aba')); 

//
function palindrome(string){
  const reversed = string.split('').reverse().join('');
  return string === reversed ? true : false;
}
const stringg = 'abba';
console.log(palindrome(stringg));

