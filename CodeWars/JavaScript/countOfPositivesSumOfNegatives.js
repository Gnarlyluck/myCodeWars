// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// function countPositivesSumNegatives(input) {
//     let negArr = []
//     let posArr = []
//     for (let i = 0; i< input.length; i++){
//       if (input[i] < 0){
//         negArr.push(input[i])
//         console.log(negArr.reduce((a, b) => a + b, 0), 'negval')
//       }
//       else if (input[i] > 0){
//       posArr.push(input[i])
//       let lastVal = posArr[posArr.length -1]
//       console.log(lastVal, ' last val')
//       }
//     }
//     return posArr;
//   }


//   function countPositivesSumNegatives(input) {
//     const arr = []
//   let counter = 0
//   for (let i = 0; i < input.length; i++){
//       if (input[i] >= 1){
//       counter++
//       }
//       else if(input[i] < 0){
//       arr.push(input[i])
//       }
//     }
//   arr.reduce((a, b) => a + b, 0)
//   console.log(arr)
//   arr.unshift(counter)
//     return input;
// }


// function countPositivesSumNegatives(input) {
//   let arr = []
// let counter = 0
// for (let i = 0; i < input.length; i++){
//     if (input[i] >= 1){
//     counter++
//     }
//     else if(input[i] < 0){
//     arr.push(input[i])
//     }
//   }
// //   arr.reduce((a, b) => a + b, 0)
//    arr.reduce((a, b) => a + b, 0)
// console.log( arr.unshift(counter),)

//   return 
// }

// function countPositivesSumNegatives(input) {
//   let arr = []
//   let result = []
// let counter = 0
// for (let i = 0; i < input.length; i++){
//     if (input[i] >= 1){
//     counter++
//       // console.log(counter)
//     }
//     else if(input[i] < 0){
//     arr.push(input[i])
//     }
//   }
//   arr.unshift(counter)
//   let reducer = arr.reduce((a, b) => a + b, 0)
//   // console.log(reducer, counter)
//   result.push(arr[0], reducer + (counter * -1))
// console.log(result)

//   // return arr[0], reducer + (counter * -1)
// }


function countPositivesSumNegatives(input) {
  let arr = []
  let result = []
  let counter = 0
 if (input && input.length > 0) {
  for (let i = 0; i < input.length; i++){
    if (input[i] >= 1){
    counter++
    }
    else if(input[i] < 0){
    arr.push(input[i])
    }
  }
  arr.unshift(counter)
  let reducer = arr.reduce((a, b) => a + b, 0)
   result.push(arr[0], reducer + (counter * -1))
  return result
    }else{
       return []
    }
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))