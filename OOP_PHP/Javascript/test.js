// challenge 1::
const produits = [
  { id: 1, nom: "Casque Bluetooth", prix: 120 },
  { id: 2, nom: "Clavier Mécanique", prix: 85 },
  { id: 3, nom: "Souris Gamer", prix: 45 },
  { id: 2, nom: "Clavier gfgfgf", prix: 95 },
];

function filtrerProduits(array, entre) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i].nom;
    let lower = element.toLowerCase();
    if (lower.includes(entre.toLowerCase().trim())) {
      result.push(array[i]);
    }
  }
  return result;
}
// console.log(filtrerProduits(produits, " CLAVier "));


// challenge 2::
const etudiants = [
  { nom: "Amina", moyenne: 15 },
  { nom: "Hassan", moyenne: 8 },
  { nom: "Samira", moyenne: 12 },
  { nom: "Amina", moyenne: 5 },
  { nom: "Hassan", moyenne: 8 },
  { nom: "Samira", moyenne: 12 },
];

const statistiquesEtudiants = (array) => {
  let total = 0;
  let moyenne = 0;
  let admi = 0;

  for (let i = 0; i < array.length; i++) {
    total++;
    moyenne += array[i].moyenne;
    if (array[i].moyenne >= 10) {
      admi++;
    }
  }
  return { total: total, moyenne: moyenne / total, admi: admi };
};
// console.log(statistiquesEtudiants(etudiants));


//challenge 3::
let todos = [];
function ajouterTache(titre) {
  todos.push({
    titre: titre,
    done: false
  });
}
function marquerCommeFaite(index) {
    if (index>=0 && index<todos.length) {
        todos[index].done = true;
    }else{
        console.log("not specified");
    }
}
function afficherTaches() {
    for (let i = 0; i < todos.length; i++) {
        const tache = todos[i];
        const stat = tache.done ? "✅" : "❌";
        console.log(`${i+1} ${stat} ${tache.titre}`);
    }
}

// ajouterTache("Apprendre JS");
// ajouterTache("Faire les courses");
// marquerCommeFaite(0);
// afficherTaches();


//challenge 4::
const calculatrice = {
    addition: function(a,b){
        return a+b;
    },
    soustraction: function(a,b) {
        return a-b;
    },
    multiplication: function(a,b){
        return a*b;
    },
    division: function(a,b) {
        if (b==0) {
            console.log("la division sur zero est incorecte");  
        }else{
            return a/b
        }
    },
  };
  
// console.log("Addition:", calculatrice.addition(10, 5));         
// console.log("Soustraction:", calculatrice.soustraction(10, 5)); 
// console.log("Multiplication:", calculatrice.multiplication(10, 5));
// console.log("Division:", calculatrice.division(10, 5));           
// console.log("Division par zéro:", calculatrice.division(10, 0));  


//challenge 5::
let candidatures = [];
let idCounter = 1; 

function ajouter(nom, projet) {
  candidatures.push({
    id: idCounter++,
    nom: nom,
    projet: projet,
    statut: "en attente"
  });
}

function changerStatut(id, nouveauStatut) {
  for (let i = 0; i < candidatures.length; i++) {
    if (candidatures[i].id === id) {
      candidatures[i].statut = nouveauStatut;
      return; 
    }
  }
  console.log("Candidature introuvable.");
}

function afficherStatistiques() {
  let total = candidatures.length;
  let validees = 0;
  let rejetees = 0;
  let attente = 0;

  for (let i = 0; i < candidatures.length; i++) {
    const statut = candidatures[i].statut;
    if (statut === "validée") validees++;
    else if (statut === "rejetée") rejetees++;
    else attente++;
  }

  console.log(`Statistiques :
- Total : ${total}
- Validées : ${validees}
- Rejetées : ${rejetees}
- En attente : ${attente}`);
}

// ajouter("Sarah", "Site vitrine");
// ajouter("Yassine", "Application mobile");
// changerStatut(1, "validée");
// changerStatut(2, "rejetée");
// afficherStatistiques();

// challenge ::
let tab = [2, 5, 6];
let tab1 = [1, 2, 3, 5, 6];
const check = (array1, array2) => {
  let j = 0; 
  for (let i = 0; i < array1.length; i++) {
    let found = false;
    for (; j < array2.length; j++) {
      if (array2[j] === array1[i]) {
        found = true;
        j++; 
        break;
      }
    }
    if (!found) {
      return false; 
    }
  }
  return true;
};
// console.log(check(tab, tab1));


let tab2 = [1,2,3,8,9,2];
const inv = (array) => {
  const size = array.length
  for (let i = array.length-1; i >= 0; i--) {
    array.push(array[i])
  }
  return array.slice(size,array.length);
}
console.log(inv(tab2));


//let tab0 = ["abcd","ddca","ddbca","r","e"];
let tab0 = [1,2,3,8,9,2];
let doublons = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] == array[j]) {
        array.splice(j,1);
        j--;
      }
    }
  }
  return array;
}
console.log(doublons(tab0));
