function reverse(a, b){
    let c = 0;
    c= a;
    a=b;
    b=c;
    return {
        a:a,
        b:b
    };
}
console.log(reverse(2 , 3));
