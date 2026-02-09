function sum(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function doArithmetic(a, b, fn){
    return fn(a,b)
}

const a = doArithmetic(40,15,sum)
console.log(a)
const b = doArithmetic(40,15,sub)
console.log(b)