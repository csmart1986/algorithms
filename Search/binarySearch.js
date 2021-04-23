// binary vs linear search

// fx that take in a SORTED array and a value and returns the index at which the value exists.  Otherwise, return -1. 
  // no array methods
  // values will only be integers
  // if receive empty array -> -1

// BINARY search (only works if sorted!)
function binarySearch(arr, num) {
    // put pointers at both ends of the array
    let start = 0;
    let end = arr.length - 1;
    // put pointer at index of middle element of array (could use Math.ceil alternativly)
    let middleIdx = Math.floor(start + end / 2);
    // while element at middle pointer isn't equal to num AND start pointer hasn't passed the end of array...
    while (arr[middleIdx] !== num && start <= end) {
      // if num is less than element at middle pointer, move the end pointer to left until it passes middle pointer by 1 position => we only care about half of array with values less than value at middle pointer 
      if (num < arr[middleIdx]) {
        end = middleIdx - 1;
      }
      // if num is greater than element at middle pointer, move the start pointer to right until it passes middle pointer by 1 position => we only care about half of array with values greater than value at middle pointer
      else start = middleIdx + 1;
      // find the new middle index of the 'shortened' array
      middleIdx = Math.floor((start + end) / 2);
    }
    // if ever num is found, return it's index.  otherwise, if start pointer reaches end of array and still haven't found num than return -1
    return arr[middleIdx] === num ? middleIdx : -1;
  }
  
  //binarySearch([1,3,4,6,8,9,11,12,15,16,17,18,19], 15). // 8
  //binarySearch([], 15) // -1
  binarySearch([1,2,3,4], 3) // 2
  
  // Time complexity O(log n) where n is size of array
  
  // LINEAR search
  function linearSearch(arr, num) {
    // check EVERY element in array 
    for (let i = 0; i < arr.length; i++) {
      const currElem = arr[i];
      // if current element is equal to num, return current element's index
      if (currElem === num) return i;
    }
    // reached end of array w/o finding num
    return -1
  }
  
  // Time complexity O(n) where n is length of array (worst case you check every element in array)
  
  //linearSearch([1,3,4,6,8,9,11,12,15,16,17,18,19], 15). // 8
  //linearSearch([], 15) // -1
  // linearSearch([100], 200) // -1
  //linearSearch([1,2,3,4], 3) // 2