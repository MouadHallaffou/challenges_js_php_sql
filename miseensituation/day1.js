//exercice 1
//1 
const tab1 = ['a', 'aaaaaaa', 'aaaa', 'aaaaa', 'aaaa'];

const longestString = tab1.reduce((prev, cur) => {
    return prev.length > cur.length ? prev : cur;
});
// console.log(longestString); 

const longestStringSort = tab1.sort((a , b) => b.length - a.length);
// console.log(longestStringSort[0]);

// 2
let tab = ['a', 'aaaaaa', 'aaa', 'aaaa'];

function findlongstring(table){
    let longstr = ""
    for(let i=0 ; i<table.length ; i++){
        if(table[i].length > longstr.length){
            longstr = table[i];
        }
    }
        return longstr;
}
// console.log(findlongstring(tab));

//2:
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
function summ(tab1 , tab2){
    let lengthTab = tab1.length - tab2.length
    if(lengthTab>0){
        for(let i=0 ; i<lengthTab; i++){
            tab2.push(0)
        }
    }else if(lengthTab<0){
        for(let i = 0 ; i<Math.abs(lengthTab); i++){
            array1.push(0)
        }
    }
    let newtable = [];
    for(let i=0 ; i<tab1.length ;i++){
        newtable.push(tab1[i] + tab2[i])
    }
    return newtable
}
// console.log(summ(array1, array2));


// Write a function to remove specified elements from the left of a given array of elements.
let arry = [1, 2 , 3 , 4 ];
function delete_letf(table, parm){
    if(parm>0){
        table.splice(0 , parm)
    }else{
        table.splice(0 , 1)
    }
    return table
}
// console.log(delete_letf(arry));



