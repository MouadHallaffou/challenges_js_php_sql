// Écrire un if affichant "Positif" si une variable nombre > 0.
// Ajouter un else affichant "Négatif ou nul" si nombre ≤ 0.
// Vérifier avec if-else si age ≥ 18 et afficher "Majeur" ou "Mineur".
function conditions(parametre) {
  if (parametre > 0) {
    console.log("variable positif.");
  } else if (parametre === 0) {
    console.log("variable null");
  } else {
    console.log("variable nagatif");
  }
}
// conditions(0)

function agee(age) {
  if (age > 18) {
    console.log("majeur.");
  } else {
    console.log("mineur");
  }
}
// agee(17);

// Créer une fonction estAdulte(age) retournant true si age ≥ 18, sinon false.
// Écrire un switch affichant le jour (ex. 1 → "Lundi") selon une variable jour (1 à 7).
// Utiliser if-else imbriqués pour vérifier si un nombre est pair, impair ou nul.
// Créer maxTrois(a, b, c) retournant le plus grand des trois nombres avec if.

function estAdulte(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
console.log(estAdulte(18)); // true
console.log(estAdulte(17)); // false

function switJour(jour) {
  let jourNom;
  switch (jour) {
    case 1:
      jourNom = "lundi";
      break;
    case 2:
      jourNom = "mardi";
      break;
    case 3:
      jourNom = "mercredi";
      break;
    case 4:
      jourNom = "jeudi";
      break;
    case 5:
      jourNom = "vendredi";
      break;
    case 6:
      jourNom = "samedi";
      break;
    case 7:
      jourNom = "dimanche";
      break;
    default:
      jourNom = "aucun";
      break;
  }
  return jourNom;
}
console.log(switJour(2)); //mardi
console.log(switJour(5)); //vendredi
console.log(switJour(8)); //aucun

function pairImpair(nombre) {
  if (nombre % 2 === 0) {
    return "pair";
  } else if (nombre % 2 !== 0) {
    return "impair";
  } else {
    return null;
  }
}
console.log(pairImpair(2));

let maxTrois = function (a, b, c) {
  if (a > b && a > c) {
    return `le max est ${a}`;
  } else if (b > a && b > c) {
    return `le max est ${b}`;
  } else {
    return `le max est ${c}`;
  }
};
console.log(maxTrois(65, 19, 58));

let maxTroisAvecMaxMath = function (a, b, c) {
  return Math.max(a, b, c);
};
console.log(maxTroisAvecMaxMath(10, 5, 8));

// Demander un nombre à l’utilisateur et afficher s’il est pair ou impair.
// Créer calculatrice(a, b, operation) pour +, -, *, / avec switch.
// Vérifier si une année est bissextile (divisible par 4 mais pas 100, ou par 400).

function pairOuImpair() {
  let nombre = Number(prompt("Entrez un nombre"));
  if (nombre % 2 === 0) {
    console.log("pair");
  } else {
    console.log("impair");
  }
}
// pairOuImpair();

function calculatrice(a, b, opr) {
  let result = 0;
  switch (opr) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        return "erreur : division par 0";
      } else {
        result = a / b;
      }
      break;

    default:
      return "erreur : operation non reconue";
  }
  return result;
}
console.log(calculatrice(10, 0, "/"));

const estBissextile = (annee) => {
    if(Number.isInteger(annee / 4) && (!Number.isInteger(annee/100) || Number.isInteger(annee/400))){
      return ` cette ${annee} est bissextile`;      
    }else{
      return ` cette ${annee} not bissextile`;      
    }
};

console.log(estBissextile(2000));

const estBissextiles = (annee) => {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return `L'année ${annee} est bissextile.`;
  } else {
    return `L'année ${annee} n'est pas bissextile.`;
  }
};