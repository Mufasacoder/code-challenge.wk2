function generateNumbersInBetween(num1,num2){

     let start = Math.min(num1, num2);

     let end = Math.max(num1, num2);

     let array =[];

     for (let i = start; i<= end; i++){
        array.push(i)
     }
     return array;
}
console.log(generateNumbersInBetween (4, 7))