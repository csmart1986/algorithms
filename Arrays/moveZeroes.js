// Given an integer array, nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// input [0] => output [0]

function moveZeros(nums) {
    // make pointer that moves forward ONLY when currNum is a non zero element
    let marker = 0;
  
    // every iteration, currNum advances forward one space
    for (let i = 0; i < nums.length; i++) {
      let currNum = nums[i];
      // if current number isn't 0...
      if (currNum !== 0) {
        // SWAP currElem position with the element at marker pointer
        let temp = nums[marker];
        nums[marker] = nums[i]
        nums[i] = temp;
        // advance marker pointer
        marker++;
      }
    }
    return nums;
  }
  
  console.log(moveZeros([0,1,0,3,12])) // [1,3,12,0,0]