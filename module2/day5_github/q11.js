function multiply(a,b){
    return `The product of ${a} & ${b} is ${a*b}`
}
console.log(multiply(6,7))

console.log(multiply(7,6))
console.log(multiply(7,6))

function checkPrime(num){
    let count = 0
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }

    if(count==2){
        return true
    }else{
        return false
    }
}
let num = 15;
console.log(checkPrime(num))

/// check even odd

if(num%2==0){
    console.log("Even")
}else{
    console.log("Odd")
}