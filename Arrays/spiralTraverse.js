// fx that takes in an n x m 2d array (that can be square shaped when n === m) and returns a 1d array of all the array's elements in spiral order

// spiral order = starts at the top L corner of the 2d array, goes to the R, and proceeds in a spiral pattern all the way until every element has been visited

// array = [[1,2,3,4],
//          [12,13,14,5],
//          [11,16,15,6],
//          [10,9,9,7]
//         ]

// returns [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]


// First traverse top border, then right border, then bottom border, then left border = entire perimeter
// then traverse the entire perimeter of array contained inside outer perimeter  = inner perimeter

// Get dimensions of 2d array 
  // grab length of 2d array
  // grab length of inner array

// create variables for 1st row, 1st column, last row, last column in 2d array

// iterate through TOP ROW w/a FOR LOOP
  // for every column, we add the value in the 2d array at the starting row and given column
  // go from 1st column to last column
  // [1234]

// Use another FOR LOOP to grab values in R border (last column) and add them to our array
  // start at starting row + 1 (aka. 2nd row b/c don't want to double count the element at last column/first row) as part of this loop
  // go to ending row
  // [1234567]

// now iterate in reverse order so we go LEFT along bottom border (last row)
  // start at last column - 1 to avoid double counting
  // go to 1st column 
  // [12345678910]

// now iterate in reverse order so we go up along starting column (left border)
  // start at ending row - 1 to avoid double counting
  // go to starting row + 1 to avoid double counting the first number
  // [123456789101112]

// have entire outer perimeter

// repeat traversal on inner array
  // get it dimensions (keep pushing dimensions inward)
    // increment starting row and column
    // decrementing ending row and column

// have traversed entire array when ending row is above starting row, starting column is past ending column

// ITERATIVE SOLN
function spiralTraverse(arr) {
    const finalArr = [];
  
    let startRow = 0;
    let startCol = 0;
    let endRow = arr.length - 1;
    let endCol = arr[0].length - 1;
  
    while (startRow <= endRow && startCol <= endCol) {
      // need to include = b/c the final part of traversal may just be a flat line (1d array where endRow === startRow or endCol = startCol)
      // TOP BORDER
      for (let col = startCol; col <= endCol; col++) {
        finalArr.push(arr[startRow][col]);
      }
      // RIGHT BORDER
      for (let row = startRow + 1; row <= endRow; row++) {
        finalArr.push(arr[row][endCol])
      }
      // BOTTOM BORDER
      for (let col = endCol - 1; col >= startCol; col--) {
        if (startRow === endRow) break;
        finalArr.push(arr[endRow][col])
      }
      // LEFT BORDER
      for (let row = endRow - 1; row > startRow; row--) {
              if (startCol === endCol) break;
        finalArr.push(arr[row][startCol])
      }
      // finished outer perimeter, move dimensions inward to capture inner perimeter
      startRow ++;
      endRow --;
      startCol ++;
      endCol --;
    }
    return finalArr;
  }
  
  // time complexity O(n) where n is total number of elements in entire 2d array
  
  // space complexity O(n)
    // storing all n values in another array
  
  
  // RECURSIVE SOLN
  function spiralTraverse(arr) {
    const finalArr = [];
  
    // call recursive fx with initial bounds of perimeter
    helper(arr, 0, arr.length - 1, 0, arr[0].length - 1, finalArr); 
  
    return finalArr;
  }
  
  // fills up finalArr by recursively traversing 2d array in spiral order
  function helper(arr, startRow, endRow, startCol, endCol, finalArr) {
    // BASE CASE
    if (startRow > endRow || startCol > endCol) {
      return
    }
    // TOP BORDER
    for (let i = startCol; i <= endCol; i++) {
      const currCol = i;
      finalArr.push(arr[startRow][currCol]);
    }
    // RIGHT BORDER
    for (let i = startRow + 1; i <= endRow; i++) {
      const currRow = i;
      finalArr.push(arr[currRow][endCol])
    }
    // BOTTOM BORDER
    for (let i = endCol - 1; i >= startCol; i--) {
      if (startRow === endRow) break;
      const currCol = i;
      finalArr.push(arr[endRow][currCol])
    }
    // LEFT BORDER
    for (let i = endRow - 1; i > startRow; i--) {
      if (startCol === endCol) break;
      const currRow = i;
      finalArr.push(arr[currRow][startCol])
    }
    // call helper fx with the next INNER array
    helper(arr, startRow + 1, endRow - 1, startCol + 1, endCol - 1, finalArr);
  }
  
  // time complexity O(n) where n is total number of elements in entire 2d array
  
  // space complexity O(n)
    // storing all n values in another array
    // have a recursive call for each perimeter but it gets outweighed by the finalResults array
  
  
  // spiralTraverse([[1,2,3,4],
  //          [12,13,14,5],
  //          [11,16,15,6],
  //          [10,9,9,7]
  //         ])
  
  // spiralTraverse([[1,2,3,4],
  //          [10,11,12,5],
  //          [9,8,7,6],
  //         ])
  
  spiralTraverse([[1],
                  [2],
                  [3],
                  [4],
                  [5],
                  [6]
          ])