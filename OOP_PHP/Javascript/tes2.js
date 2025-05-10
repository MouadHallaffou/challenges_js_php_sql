const words = ["apple", "banana", "apricot", "blueberry", "cherry", "avocado"];

const grouping = (array) => {
    let groups = {};

    for (let i = 0; i < array.length; i++) {
        let firstLetter = array[i][0];

        // Si la lettre existe déjà comme clé, on ajoute au groupe
        if (groups[firstLetter]) {
            groups[firstLetter].push(array[i]);
        } else {
            groups[firstLetter] = [array[i]];
        }
    }

    // On transforme l'objet en tableau de groupes
    return Object.values(groups);
};

console.log(grouping(words));
