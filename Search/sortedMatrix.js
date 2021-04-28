// Given a 2D array (a matrix) of distinct integers and a target integer.  Each row in the matrix is sorted, and each column is also sorted.  The matrix doesn't necessarily have the same height and width.  Return an array of the row and column indices of the target integer if it is in the matrix.  Otherwise return [-1,-1].  
  // sorted ascending or descending? ascending
  // can matrix ever be empty? no

function sortedMatrix(matrix, target) {
// set row pointer at 1st row
let row = 0;
// set col pointer at last column
let col = matrix[0].length - 1;
// iterate as long as row pointer doesnt pass the last row AND col pointer doesn't pass first column 

while (row < matrix.length && col >= 0) {
    console.log('start: ', row, col)
    // for 1st iteration, start at 1st row, last column (upper right corner of matrix)
    
    // if value is > target, target can't be in that column (values will all be bigger than target) so move column pointer to preceding column
    if (matrix[row][col] > target) {
    col--;
    console.log('new col: ', col)
    }
    // if value is < target, target can't be in that row (values will all be smaller than target)so move row pointer to next row
    else if (matrix[row][col] < target) {
    row++
    console.log('new row: ', row)
    }
    // have found the target, return current row and column
    else return [row, col];
}
// One or both pointers have passed their limits, target isn't in matrix
return [-1,-1];
} 
  
// time complexity O(n + m) where n is length of rows and m is length of columns and space complexity O(1).  Worse case you traverse an entire row and column length.

// brute force method where you iterate over every single value checking for target would be O(n * m)time complexity

// sortedMatrix([
//   [10, 20, 30, 40],
//   [15, 25, 35, 45],
//   [27, 29, 37, 48],
//   [32, 33, 39, 50]
//   ], 29) // [2,1]

sortedMatrix([
[10, 20, 30, 40],
[15, 25, 35, 45],
[27, 29, 37, 48],
[32, 33, 39, 50]
], 34) // [-1.-1]