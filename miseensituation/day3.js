// Écrivez une fonction qui reçoit une chaîne de caractères et retourne une version compressée :
// Exemple:
// Input: "aaabbc"
// Output: "a3b2c1"
let char = 'aaabbcccc'

let compresed = (string) => {
    let count = 1;
    let result = ""
    for(let i = 0 ; i<string.length ; i++){
        if(string[i] !== string[i+1]){
            result += string[i] + count
            count = 1
        }else{
            count ++
        }
    }        
    return result
}

// console.log(compresed(char));

//ex2 :
// Input: [4, 2, 1, 6, 5]
// Output: [[1, 2], [4, 5, 6]]
let input = [4, 2, 1, 6, 5];

let separation = (table) => {
    let result = [];
    let group = [];
    let sorted = [...new Set(table)].sort((a, b) => a - b);

    for (let i = 0; i < sorted.length; i++) {

        if (group.length === 0) {
            group.push(sorted[i]);
        }

        if (sorted[i] + 1 === sorted[i + 1]) {
            group.push(sorted[i + 1]);
        } else {
            if (group.length > 1) {
                result.push(group);
            }
            group = []; 
        }
    }
    
    return result;
};

console.log(separation(input));



