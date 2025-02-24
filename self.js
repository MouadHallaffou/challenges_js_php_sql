const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']
//////////////////////////////////////////////////////////////////////
const webTechs = [ 'HTML','tailwind', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// 1:
let tab = [];
// 2:
const users = ['mouad','annass','aymene','jabir','sara'];
// 3:
const length = users.length;
// console.log(length);
// 4 :
const premiere = webTechs[0];
// console.log(premiere);
function milieuElement(table){
const milieu = Math.floor(table.length/2);
if(table.length%2 === 0){
    const [mil1 , mil2] = [table[milieu - 1] , table[milieu]];
    return [mil1 , mil2];
}
else{
    return table[milieu]
}
}
// console.log(milieuElement(webTechs));

const lengthTable = webTechs.length;
const derniere = webTechs[lengthTable-1];
// console.log(derniere);

// 5:
const mixedDataTypes = ['5', 'mouad', true, false, 10, null, Symbol, {nom: 'anass', age: 20}, undefined];
// console.log(mixedDataTypes.length);

// 6:
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7:
//  console.log(itCompanies);

// 8:
// console.log(itCompanies.length);

// 9:
// console.log(itCompanies[0]);
// console.log(itCompanies[itCompanies.length - 1]);
// console.log(milieuElement(itCompanies));

// 10:
// itCompanies.forEach(ele =>{
//     console.log(ele);
// })

//11:
// itCompanies.forEach(ele =>{
//     console.log( ele.toUpperCase());
// })


//12:
// const phrase = itCompanies.slice(0 , -1 ).join(', ') + " and " +  itCompanies[itCompanies.length - 1] + " its IT companies";
// console.log(phrase);

//13:
function findByName(name, table=[]){
    const finding = table.find(ele => ele.toLowerCase() === name.toLowerCase())
    if(finding){
        return console.log(name + " is in the table");
    }else{
        console.log("element not found dans la table");
    }
}
// findByName('GOOGLE', itCompanies);

//14:


