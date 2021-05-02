// INSERTION SORT 

// fx that takes array of integers and returns a sorted version of that array.  Use INSERTION Sort algorithm to sort the array.  
  // if arr is empty? return [];
  // can there be duplicates? yes
  // + or - integers or 0? yes


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        // grab 2nd element in array (b/c sorted portion is considered 1st element in array at start of function)
        let currElem = arr[i];
        // grab the index that comes directly before currElem index
        let j = i - 1;
        // compare currElem to every element in array that comes before it
        // as long as element at index j is greater than currElem...
        while (j >= 0 && arr[j] > currElem) {
            // make the value of the element that comes AFTER element at index j equal to value at index j
            arr[j + 1] = arr[j];
            // move to the next preceding element so can compare it to currElem
            j--;
        }
        // once while loop is done, insert currElem into sorted position, go back to outer loop to repeat process on next element in array
        arr[j+1] = currElem;
    }
    return arr;
}
  
// time complexity O(n**2) where n is length of array b/c compare every element to every other element in array
// space complexity O(1)

insertionSort([34,22,10,19,17]) // [10,17,19,22,34]
//insertionSort([8,5,2,-9,5,-6,0]) // [-9,-6,0,2,5,5,8]
//insertionSort([]) // []