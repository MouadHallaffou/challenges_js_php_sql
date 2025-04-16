// Exercice : Trouver les doublons et les valeurs uniques
//  Écrivez une fonction qui reçoit un tableau d'entiers et retourne deux tableaux :
// Un avec les valeurs uniques
// Un autre avec les doublons
// Input: [2, 3, 4, 2, 3, 5, 6]
// Output:
// - Uniques: [4, 5, 6]
// - Doublons: [2, 3]

let table = [2, 3, 4, 2, 3, 5, 6];

let separation = (table) => {
  let unique = [];
  let doublons = [];

  let sorted = table.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      if (!doublons.includes(sorted[i])) {
        doublons.push(sorted[i]);
      }
      i++;
    } else if (!doublons.includes(sorted[i])) {
      unique.push(sorted[i]);
    }
  }

  return {
    doublons: doublons,
    unique: unique
  };
};

console.log(separation(table));

