// SELECTION SORT 

// fx that takes array of integers and returns a sorted version of that array.  Use Selection Sort algorithm to sort the array.  
  // if arr is empty? return [];
  // can there be duplicates? yes
  // + or - integers or 0? yes

  function selectionSort(arr) {
    // repeat this process w/every element until array is sorted
    for (let i = 0; i < arr.length; i++) {
      // store the current minimum value's index (we need the index to make swap) 
      // first element in arr is the smallest value seen so far
      let min = i;
      // compare this item to next item in array until you find a smaller #
      for (let j = i + 1; j < arr.length; j++) {
        // if smaller # found, make that smaller # the new minimum 
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      // when get to end of array, if min is not the value (index) you initially began with (i), swap the 2 values
      if (i !== min) {
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
      // if they are the same, then the first element was the minimum value or already sorted
      // smallest value has been moved to front of array
      // break to outer loop to repeat process starting at next element in array
    }
    return arr;
  }
  
  // time complexity O(n**2) where n is length of array b/c compare every element to every other element in array
  
  selectionSort([34,22,10,19,17]) // [10,17,19,22,34]
  //selectionSort([8,5,2,-9,5,-6,0]) // [-9,-6,0,2,5,5,8]
  //selectionSort([]) // 0