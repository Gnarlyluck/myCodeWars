// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

function descendingOrder(n){
    var myArr = String(n).split("").map((n)=>{
    return Number(n)
  })
  return parseInt(myArr.sort(function(a, b){return b-a}).join(''))
  }