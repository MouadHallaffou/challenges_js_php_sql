// Faciles
// Déclarez une variable nom avec votre nom et affichez-la dans la console avec console.log(nom).
// Créez une constante age avec votre âge et affichez-la.
// Déclarez une variable estEtudiant avec true si vous êtes étudiant, sinon false, et affichez-la.
var name = "mouad"; console.log(name);
const age = 24; console.log(age);
var estEtudiant = false; console.log(!estEtudiant);
// Moyens
// Créez deux variables numériques a et b, additionnez-les et affichez le résultat.
// Concaténez deux chaînes de caractères (votre prénom et nom) dans une variable nomComplet et affichez-la.
// Convertissez la chaîne "10" en nombre avec parseInt() ou Number(), ajoutez-la à un autre nombre, et affichez le résultat.
// Créez un tableau fruits avec trois fruits de votre choix et affichez-le.
var a = 10 ; var b = 20; const result = a/b ; console.log(result);
var fname = "mouad" ; var lname = "hallaffou" ; var full = fname + ' ' + lname ; console.log(full);
var x = "10" ; const pars = parseInt(x) + 5; console.log(pars);
const tabl = ['banna', 'ananass', 'kaki']; console.log(tabl);
// Difficiles
// Créez un objet personne avec les propriétés nom, age et ville, puis affichez chaque propriété avec console.log().
// Déclarez une variable let compteur = 5, modifiez sa valeur à 10, et affichez-la avant et après la modification.
// Essayez de modifier une constante (ex. const x = 5) et observez l’erreur dans la console.

let personne = {
    'name' : 'mouad',
    'age': 121,
    'status': 'etudiant'
}
console.log(personne.name);console.log(personne.age);

let compteur = 5;
console.log(compteur);
 compteur = 14;
console.log(compteur);

const error = 10 ;
// let error = 15;
console.log(error)



