// Helper Method Recursion => outer fx (that's not recursive) calls inner fx that is recursive

// fx that finds all odd values in an array, then return a new array with the odd values only
    // can #s be negative?
    // are values only integers?

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

collectOddValues([1,2,3,4,5,6,7,8])