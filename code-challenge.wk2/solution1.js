function swapCase(inputStr){

    let swappedText = '';

    for (let i=0; i<inputStr.length; i++){
        let letter = inputStr[i]; 

        if (letter === letter.toUpperCase()){

            swappedText += letter.toLowerCase()
       
        }else {
            swappedText += letter.toUpperCase()
        }
    }
    return swappedText
}
let inputStr ="The Quick Brown Fox";
let outputStr = swapCase(inputStr);
console.log(outputStr);
