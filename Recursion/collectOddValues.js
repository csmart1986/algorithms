// Helper Method Recursion => outer fx (that's not recursive) calls inner fx that is recursive
// VS
// Pure Recursion

// fx that finds all odd values in an array, then return a new array with the odd values only
    // can #s be negative? yes
    // are values only integers? yes
    // if input is empty array? return []

// HELPER METHOD
// OUTER fx
function collectOddValues(arr) {
    // declare this outside of recursive fx so it doesn't get reset each time make recursive call
    const result = [];
    // INNER fx
    function helper(inputArr) {
      // BASE CASE => if array is empty, exit helper fx and return empty array at the end
      if (inputArr.length === 0) return;
      // if 1st element is odd, add it to result array
      if (inputArr[0] % 2 !== 0) {
        result.push(inputArr[0])
      }
      // then make recursive call on everything else in array excluding 1st element
      helper(inputArr.slice(1))
    }
    // execute helper fx with the array passed to outer fx
    helper(arr);
    return result
}

// PURE RECURSION
function collectOddValues(arr) {
    // this array will be reset to empty w/each recursive call so will need to use concat to combine all the array result arrays together
    let result = [];
    // Base case
    if (arr.length === 0) return result;
    // if 1st value in input array is odd, add it to result array
    if (arr[0] % 2 !== 0) {
        result.push(arr[0]);
    };
    // make recursive call on the rest of the input array except for first value
      // concat that returned array from this recursive call to the previous result array and return final result
    result = result.concat(collectOddValues(arr.slice(1)))
    return result;
}

collectOddValues([1,2,3,4,5,6,7,8]);