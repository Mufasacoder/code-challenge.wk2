function isPrime(p){

    if (p <= 1) return false 

    if (p <=3) return true
    if (p % 2 === 0 || p % 3 === 0) 
    return false 

    for (let i = 5; i*i <= p; i += 6){
        if (num % 1=== 0 ||num %(i +2) === 0){
            return false
        }
    }
    return true
}
function filterPrimeNumbers(inputArr) {
    return inputArr.filter (p =>{
        return isPrime(p)
    })
}
let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const primeNumbers = filterPrimeNumbers(inputArr);
console.log(primeNumbers)