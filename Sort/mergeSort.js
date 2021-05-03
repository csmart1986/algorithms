// MERGE SORT 

// fx that takes array of integers and returns a sorted version of that array.  Use MERGE Sort algorithm to sort the array.  
  // if arr is empty? return [];
  // can there be duplicates? yes
  // + or - integers or 0? yes

// HELPER FUNCTION
function merge(arr1,arr2) {
    const results = [];
    // set pointers at beginning of both arrays
    let idx1 = 0;
    let idx2 = 0;
    // while there is still values to look at in BOTH arrays
    while (idx1 < arr1.length && idx2 < arr2.length) {
      // put smaller value into results array
      if (arr2[idx2] > arr1[idx1]) {
        results.push(arr1[idx1])
        // move idx1 pointer up by 1;
        idx1++
      }
      else {
        results.push(arr2[idx2]);
        idx2++;
      }
    // have merged into results as much as we can but now have hit the end of one the arrays so this while loop ends
    }
  
    // put all remaining values from the other array where pointer hasn't reached the end into the results array
    while (idx1 < arr1.length) {
      results.push(arr1[idx1])
      idx1++;
    }
    while (idx2 < arr2.length) {
      results.push(arr2[idx2])
      idx2++;
    }
    return results;
}
  
  merge([1,10,50], [2,14,99,100])
  merge([], [1,3])
  
  
function mergeSort(arr) {
    // BASE case (arr is empty or has only 1 element)
    if (arr.length <= 1) return arr;

    // find midpoint of array so can split it into left and right sections
    let mid = Math.floor(arr.length/2);
    // RECURSIVE call on left side of array
    let left = mergeSort(arr.slice(0, mid));
    // this RECURSIVE call waits for left side to run until it returns  something before running
    let right = mergeSort(arr.slice(mid));

    // call HELPER function -> takes 2 sorted arrays and returns the sorted merged array
    return merge(left, right)
}
  
// time complexity O(n log n) 
// log n -> 
    // as n grows (n is # of elements), the # of times we split n grows at rate of log n
// n ->
    // each time a split occurs, have O(n) comparisions to perform the merging
    
// space complexity O(n)
  
mergeSort([34,22,10,19,17]) // [10,17,19,22,34]
//mergeSort([8,5,2,-9,5,-6,0]) // [-9,-6,0,2,5,5,8]
// mergeSort([]) // []
