// Fx that takes NON empty array of distinct integers and integer representing targetSum.  Find all triplets that sum up to targetSum and return 2D array of all these triplets.  
  // Numbers should be sorted in ascending order, & triplets themselves should be in ordered in ascending order w/respect to #s they hold.
  // if no 3 numbers add up to targetSum, return []

// will input arr always be sorted? No
// returning a new array?  yes

// final array to return at end
// sort in place in ascending order O(n log n)
// now can use 2 loops with L and R pointers
// iterate through whole array once
  // grab currNumber
// left pointer set right after currNumber
// right pointer at far end of array
// currSum = currNumber + leftNum + rightNum
  // is currSum === targetSum? 
    // if yes, add to our final array
      // move BOTH pointers (avoid over/undershooting targetSum automatically) inwards at same time b/c need to check if any additional combos with currNum equal targetSum 
    // if no,
      // is currSum > or < targetSum?
        // b/c array is sorted, can move right OR left pointer appropriately
          // if currSum > targetSum: move Right pointer left by 1
          // if currSum > targetSum: move Left pointer right by 
// if pointers pass eachother, break out of inner loop
  // make currNumber the next number in array (outer loop)
// Repeat process

function threeNumberSum(arr, targetSum) {
    const finalArr = [];
    arr.sort((a,b) => a - b);
    // stop at 3rd to last # b/c L and R pointer will be at last 2 #s at that point
    for (let i = 0; i < arr.length - 2; i++) {
      const currNum = arr[i];
      let left = i + 1;
      let right = arr.length - 1;
  
      while (left < right) {
        const currSum = currNum + arr[left] + arr[right];
        if (currSum === targetSum) {
          finalArr.push([currNum, arr[left], arr[right]]);
          left++;
          right--;
        };
        if (currSum < targetSum) {
          left++
        };
        if (currSum > targetSum) {
          right--;
        };
      }
    }
    return finalArr;
  };
  
  threeNumberSum([12,3,1,2,-6,5,-8,6],0)  // [[-8,2,6],[-8,3,-5],[-6,1,5]]
  
  // Time complexity O(n**2) where n is length of input array 
    // Nested loop
      // 1st loop iterates over entire array
      // 2nd loop, for each number in array, perform while loop
    // .sort is O(n log n) but having the nested loops outweigh this step
  
  // Space complexity O(n)
    // the triplets we are storing (could potentially store every number in array)