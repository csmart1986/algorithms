// Kadane's Algorithm = maximum subarray problem
  // uses dynamic programming!

// fx that takes in a non empty array of integers and returns the maximum sum that can be obtained by summing up all of the integers in a non empty subarray of the input array
  // subarray must only contain adjacent numbers (numbers next to each other in the input array)

// input = [3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]
// output = 19
  // [1,3,-2,3,4,7,2,-9,6,3,1]


// if have array of only + numbers, sum up ALL numbers in array
// if have - numbers, they make solution more complicated as they can either have not that much of an effect or pull down the sum even further

// find maximum value that you can generate from a subarray for all of the subarrays ending at each index => dynamic programming!

// Whenever at new idx and trying to find max sum ending at that index, there are 2 possibilities:
  // take max sum that was ending at previous index and add our current number -OR-
  // just use current number

  // maxSumEndingHere = max(maxSumEndingHere + num, num)

// keep track of the max maxSumEndingHere (aka. maxSoFar) that you have come across so far
  // maxSoFar = max(maxSoFar, maxSumEndingHere)

// when done traversing input array, return maxSoFar


function kadanesAlgorithm(array) {
    let maxSumEndingHere = array[0];
    let maxSoFar = array[0];
  
    for (let i = 1; i < array.length; i++) {
      const currNum = array[i];
      maxSumEndingHere = Math.max(currNum, currNum + maxSumEndingHere);
      maxSoFar = Math.max(maxSumEndingHere, maxSoFar);
    }
    return maxSoFar;
}

console.log(kadanesAlgorithm([3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4])) // 19

// time complexity O(n) where n is length of input array
    // iterate through input array once

// space complexity O(1)
    // not storing anything except maxSoFar and maxSumEndingHere