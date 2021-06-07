// 1. Tag elements that are adjacent to eachother that have 3 or more repititions of themselves
  // check and tag rows
  // check and tag columns
// 2. Crush & Gravity effect
// 3. Check if in stable state


// How to TAG adjacent #s
  // all candies will start as positive numbers 
  // create sliding window of length 3
  // if all 3 absolute values are equal, convert all to negative value
  // this way can track additional adjacent numbers over 3 repetitions in length

// CRUSH/GRAVITY
  // every time you see a non-negative number, move it down in its column but maintaining the column order
  // when get to end, fill everything else up in the column with 0s

// Check STABILITY
  // If made it through the board w/o making a change, we're stable, return board
  // If make any change, not stable, do another iteration

  function candyCrush(board) {
    // assuming you get a legit board as input
  
    const numRows = board.length;
    const rowLength = board[0].length;
    // if make any changes to board, reset this to false
    let done = true;
  
    // CRUSH ROWS
    for (let i = 0; i < numRows; i++) {
      // stop at the 3rd to last column (sliding window is lenth 3)
      for (let j = 0; j < rowLength - 2; j++) {
        // assign 3 numbers that make up sliding window, get their abs values to make comparisions (so a negative # will match as being the same value)
        let num1 = Math.abs(board[i][j]);
        // 1 and 2 columns over from num1
        let num2 = Math.abs(board[i][j + 1]); 
        let num3 = Math.abs(board[i][j + 2]); 
        // if all 3 numbers are equal and not 0
        if (num1 === num2 && num2 === num3 && num1 !== 0) {
          // tag numbers by making taking abs value and converting to negative
          board[i][j] = -num1;
          board[i][j + 1] = -num2;
          board[i][j + 2] = -num3;
          // made changes to board so not done
          done = false
        }
      }
    };
    // CRUSH COLUMNS
    for (let i = 0; i < numRows - 2; i++) {
      // stop at the 3rd to last column 
      for (let j = 0; j < rowLength; j++) {
        // assign 3 numbers that make up sliding window, get their abs values to make comparisions (so a negative # will match as being the same value)
        let num1 = Math.abs(board[i][j]);
        // 1 and 2 rows below num1
        let num2 = Math.abs(board[i + 1][j]); 
        let num3 = Math.abs(board[i + 2][j]); 
        // if all 3 numbers are equal and not 0
        if (num1 === num2 && num2 === num3 && num1 !== 0) {
          // tag numbers by making taking abs value and converting to negative
          board[i][j] = -num1;
          board[i + 1][j] = -num2;
          board[i + 2][j] = -num3;
          // made changes to board so not done
          done = false
        }
      }
    };
  
    // GRAVITY - Drop vertically
    // if you have made changes...
    if (!done) {
      for (let j = 0; j < rowLength; j++) {
        let row = numRows - 1;
        for (let i = numRows - 1; i >= 0; i--) {
          // move all POSITIVE numbers down in each column
          if (board[i][j] >= 0) {
            board[row--][j] = board[i][j];
          }
        }
        // put zeroes in to fill blank spaces
        for (let i = row; i >= 0; i--) {
          board[i][j] = 0;
        }
      };
    };
    // if no changes made, return board.  Else, recursive call with updated board
    return done ? board : candyCrush(board);
  };
  
  const test = [[1,3,5,5,2],[3,4,3,3,1],[3,2,4,5,2],[2,4,4,5,5],[1,4,4,1,1]]
  console.log(candyCrush(test))