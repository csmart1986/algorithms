// Multiple Pointers

// fx that accepts an array of sorted integers and a target average.  are there any pairs of values in the array where the average of pair equals the target value?  can be more than pair that matches average target
  // can integers be negative? yes
  // can you have [] or only 1 value in array? yes
  // pair => 2 values
  // what do you mean by avg?  (2 + 3) / 2 = 2.5


function averagePair(arr, target) {
    // if empty array or only 1 value in arr, 
    if (arr.length < 2) return false;
    // put a pointer on both ends of the array
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    // while pointers havent reached eachother...
    while (leftPointer < rightPointer) {
        // get avg of values at the pointers & check to see if equal to target avg
        const avg = arr[leftPointer] + arr[rightPointer] / 2;
        if (avg === target) return true;
        // if not equal, move L or R pointer 1 postion forward/backwards depending on if avg is < or > target avg
        else if (avg > target) {
            rightPointer--
        }
        else {
            leftPointer++
        }
    };
    // checked all pairs in arr and none match the target avg
    return false;
}
  
//averagePair([1,2,3], 2.5) // true
//averagePair([1,3,3,5,6,7,10,12,19],8) // true
//averagePair([], 4) // false
averagePair([-1,0,3,4,5,6], 4.1) // false

// time O(n), space O(1) where n is length of array