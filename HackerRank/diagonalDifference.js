// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

function diagonalDifference(arr) {
    // Write your code here
    let diag1 = 0, diag2 = 0
    for(let i = 0; i < arr.length; i++){
        diag1 += arr[i][i]
        diag2 += arr[arr.length - 1 - i][i]
    }
    return Math.abs(diag1 - diag2)
}
console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]))