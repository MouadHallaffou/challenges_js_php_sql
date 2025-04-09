// Exercice : Trouver les nombres manquants
// Écrivez une fonction qui reçoit un tableau trié de nombres entiers. La fonction doit retourner un tableau contenant tous les nombres manquants entre le plus petit et le plus grand nombre du tableau.
// Exemple :
// Input: [1, 2, 4, 7]
// Output: [3, 5, 6]

// Instructions :
// Commencez par identifier le plus petit et le plus grand nombre du tableau.
// Créez une séquence complète entre ces deux nombres.
// Comparez cette séquence avec le tableau original pour identifier les nombres manquants.
// Retournez les nombres manquants sous forme de tableau.

let table = [1,2,9];
const findManquantsNative = (table) => {
    if(table.length === 0 ) return []
    let premier = table[0];
    let derniere = table[table.length -1];
    let nbrmanquant = [];
    let index = 1;

    for(let i=premier+1 ; i<derniere ; i++){
        if(i === table[index]) index++
        else nbrmanquant.push(i)
    }
    return nbrmanquant;
};

// console.log(findManquantsNative(table));

const findManquantsByIncludes = (table) =>{
    if(table.length === 0 ) return []
    let min = table[0];
    let max = table[table.length-1];
    let manquants = []

    for(let i=min ; i<max ; i++){
        if(!table.includes(i)) manquants.push(i);
    }
    return manquants
}

console.log(findManquantsByIncludes(table));
