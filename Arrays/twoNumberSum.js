// input: NON EMPTY array of DISTINCT integers AND an integer representing a target SUM
// If ANY 2 numbers in input array sum up to the target sum, the fx should return them in an ARRAY in ANY order
// If NO two numbers sum up to target sum, return an EMPTY array

// INPUT: (arr, targetSum)
// OUTPUT: array

// Cant add a single integer to itself in order to obtain target sum
// will be at most 1 pair of numbers summing up to target sum

// is array sorted? no
// type of integers? + or -

// edge case - array of 1 number => return EMPTY array

// Ex: [1], 3 => []
// [1,2,3,-1,0,], 5 => [2, 3] OR [3,2]
// [1,2,3,-1,0,], 50 => []

// brute force
  // nested loop where you compare every element in array to every element that comes after it to see if the 2 element sum to the target sum
  // time complexity is O(n**2)

  function twoNumberSum(array, targetSum) {
    // create hash table to store all the elements seen aleady in the array (key) and the value of targetSum - element (value could be anything, it doesn't impact the result)
    const obj = {};
  
      for (let i = 0; i < array.length; i++) {
          const currElem = array[i];
          const otherElem = targetSum - currElem;
          
          // if already seen otherElem in the input array, it will be an existing key in the obj, return the 2 elements that add up to target sum
          if (obj[otherElem] !== undefined) return [currElem, otherElem];
  
          // Haven't seen otherElem in array yet, add the current element to the obj with its value being otherElem
          obj[currElem] = otherElem;
      // go on to next element in array
      }
    // got to end of array w/o finding 2 numbers that result in target sum
      return [];
  }
  
  twoNumSum([1,2,3,4,5], 9)