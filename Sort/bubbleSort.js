// fx that takes in an array of integers and returns a sorted version of that array. use BUBBLE SORT!

function bubbleSort(arr) {
    // this represents # of passes over entire array
    for (let i = arr.length; i > 0; i--) {
      // initially, i = 4, then 3, 2, 1, break out of whole loop
      console.log('1 pass complete')
      // initially, no swaps have been made in this current pass
      let noSwaps = true;
      // this represents # of comparisions in a single pass over array -> amount of elements we need to sort decreases by 1 w/each pass b/c largest element gets assigned at end of pass
      for (let j = 0; j < i - 1; j++) {
        // iterate over array making 3 comparisions, then break to OUTER loop for next pass over entire array (next pass make 2 comparisions, then 1 comparision)
        console.log('making a comparision')
        // compare curr element to next element.  if curr element is bigger than next element, swap their positions
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          // have made a swap!
          noSwaps = false;
        }
      }
      // array is already sorted
      if (noSwaps) break;
    }
    // return final sorted array
    return arr;
  }
  
  // time complexity O(n**2) b/c nested loop so making n number of comparisions for each item in the array
      // but if already or nearly sorted than it is more like O(n) linear time (Best case)
  
  
  //bubbleSort([37,45,29,8])
  //bubbleSort([8,1,2,3])
  //bubbleSort([])
  