// Given an array of integers b/t 1 and n, inclusive, where n is the length of the array, write fx that returns the first integer that appears more than once (when the array is read from right to left)

  // of all the integers that might appear more than once in input array, you should return the one whose 1st DUPLICATE value has the MINIMUM INDEX
  // if no integer appears more than once, return -1
  // allowed to MUTATE input array


// BRUTE FORCE
  // OUTER loop starts at beginning of array, INNER loop starts at start idx + 1
  // create minimum index variable set to length of array 
    // if the value is the same by the end of fx, didn't find any duplicates
  // for every value in the array, look for duplicate of that value
  // when find one, use index of that duplicate to update minimum index variable if that index is < current value of minimum index
  // at the end, return the value at minimum index

  // time complexity O(n**2)
    // nested loop
    
  // space complexity O(1)

  function firstDuplicateValue(array) {
    let minIdx = array.length;
    for (let i = 0; i < array.length; i++) {
      const currValue = array[i];
      for (let j = i + 1; j < array.length; j++) {
        const compareValue = array[j];
        if (currValue === compareValue) {
          minIdx = Math.min(minIdx, j);
        }
      }
    }
    if (minIdx === array.length) return -1;
    return array[minIdx];
  }
  
  // SET
    // Intialize an empty set 
    // Look through every value in array
      // every time see a value, add it to seen set
    // Check to see if value is in the seen set
      // if it is, have found duplicate
    // Just return the value
      // you know this is 1st duplicate b/c you wouldn't have gotten to this point otherwise
  
    // time complexity O(n)
      // need to potentially check every value in array
      // looking up element in a set is constant
      
    // space complexity O(n)
      // the set could contain n # of elements if no duplicates
  
  function firstDuplicateValue(array) {
    const alreadySeen = new Set();
    for (let value of array) {
      if (alreadySeen.has(value)) return value;
    }
    return -1;
  }
  
  // BEST SOLUTION
    // All the integers in array are in range of 1 to n
      // know that none of the numbers start out NEGATIVE
      // can use indices to map values to eachother
        // VALUE - 1 = INDEX
    // Start at beginning of array w/a pointer
    // Find the index that maps to this value in the array
      // value may be NEGATIVE so use abs(VALUE) - 1 = INDEX
    // See what value is at that index and check if it is NEGATIVE
    // If value is NOT NEGATIVE, set this value to be NEGATIVE, move on to next value in array
    // If value is NEGATIVE, this means that pointer is at the 1st duplicate in the array
      // return value at the pointer
  
    // time complexity O(n)
      // go through the array once
      
    // space complexity O(1)
      // just reusing space in the input array
  
  function firstDuplicateValue(array) {
    for (let value of array) {
      let absVal = Math.abs(value) 
      // if value at index is NEGATIVE
      if (array[absVal - 1] < 0) {
        // ensure returned value is not negative
        return absVal;
      }
      // if value at index is NOT negative
      else {
        // set value at index to be negative
        array[absVal - 1] *= -1;
      }
    }
    return -1;
  }
  
  console.log(firstDuplicateValue([2,1,5,2,3,3,4])) // 2
  //console.log(firstDuplicateValue([2,1,5,3,3,2,4])) // 3