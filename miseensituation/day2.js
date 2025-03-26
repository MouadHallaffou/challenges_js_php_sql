// Write a JavaScript function to create an array out of the arrays by creating each possible pair from the arrays.
// Use reduce(), map() and concat() to produce every possible pair from the elements of the two arrays.
const arr1 = [ 1 , 2 ]
const arr2 = [ 'a' , 'b']

function allpossiblite(table1 , table2){
    return table1.reduce((acc , val1) => {
        return acc.concat(table2.map(val2 => [val1 , val2]))
    }, [])
}

// console.log(allpossiblite(arr1 ,arr2));

function allPossibilite(table1, table2) {
    return table1.flatMap(val1 => table2.map(val2 => [val1, val2]));
}
// console.log(allPossibilite(arr1, arr2));

function allposibilitenative(table1, table2){
    let newtable = []
    for(let i=0 ; i<table1.length ; i++){
        for(let j = 0 ; j<table2.length ; j++){
            newtable.push([table1[i],table2[j]])
        }  
    }
    return newtable
}
// console.log(allposibilitenative(arr1, arr2));