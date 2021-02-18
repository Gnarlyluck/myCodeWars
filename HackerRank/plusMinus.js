// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
// Print the decimal value of each fraction on a new line with 6 places after the decimal.


function plusMinus(arr) {
    let posCount = 0
    let negCount = 0
    let zCount = 0
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            posCount += 1
        }
        else if(arr[i] < 0){
            negCount += 1
        }
        else if(arr[i] === 0){
            zCount += 1
        }
    }
    let z = zCount / arr.length
    let pos = posCount/ arr.length
    let neg = negCount/ arr.length
    console.log(pos.toFixed(6))
    console.log(neg.toFixed(6))
    console.log(z.toFixed(6))
}