// QUICK SORT 

// fx that takes array of integers and returns a sorted version of that array.  Use QUICK Sort algorithm to sort the array.  
  // if arr is empty? return [];
  // can there be duplicates? yes
  // + or - integers or 0? yes

// HELPER FUNCTION
function pivot(arr, start = 0, end = arr.length - 1) {
    // Swap function
    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    // grab 1st element as pivot value
    let pivot = arr[start];
    // tracks how many elements are < than pivot => tracks the index that we are swapping pivot element to
    let swapIdx = start;
    for (let i = start + 1; i < arr.length; i++) {
      // compare pivot to current element
      if (pivot > arr[i]) {
        // if there's an element with value < pivot, increment counter
        swapIdx++;
        // call swap function to move curr element with swapIdx element
        swap(arr, swapIdx, i)
      }
    }
    // swap INDEX of starting pivot element with the swapIdx
    swap(arr, start, swapIdx)
    // return pivot index
    //console.log(arr)
    return swapIdx
  }
  
//pivot([4,8,2,1,5,7,6,3])  // 3 => b/c 4 (our pivot element) is at index 4 of array by the end of function
  
  
function quickSort(arr, left = 0, right = arr.length -1) {
// BASE CASE => if left and right pointers are equal, it means it there is only 1 element
    if (left < right) {
        // calls HELPER Fx => returns pivot index
        let pivotIdx = pivot(arr, left, right);
        // Recursive call on LEFT SIDE 
        quickSort(arr, left, pivotIdx - 1);
        // Recursive call on RIGHT side
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}


quickSort([34,22,10,19,17]) // [10,17,19,22,34]
//quickSort([8,5,2,-9,5,-6,0]) // [-9,-6,0,2,5,5,8]
//quickSort([]) // []

// time complexity O(n**2) where pivot element is either always the minimum or maximum element
// O(n) decompositions, and on each decomposition we have to make O(n) comparisions
// best case time complexity => O(n log n)
    
// space complexity O(log n)