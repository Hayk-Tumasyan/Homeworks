function turnOver(a){
    let b = 0;
    let count = a.toString().length;
    while(count>=0){
        count--;
        b += a%10 * 10**count;
        a = parseInt(a/10);
    }
    return b;
}

console.log(turnOver(123));