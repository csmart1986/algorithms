// fx that takes in an array of + integers and returns the maximum SUM of NON adjacent elements in the array.  If input array is empty, the fx should return 0

// input = [75, 105, 120, 75, 90, 135]
// output = 330  ( 75 + 120 + 135 )

// input = [7, 10, 12, 7, 9 ,14]
// output = 33  ( 75 + 12 + 14 )

// can there be duplicate integers?  yes
// input array is sorted?  no
// only + integers? yes (but good edge case to consider would be - integers)


// build a new array of same length as input array
  // store the greatest sum we can generate w/no adjacent #s up until and including the idx at which we are storing this sum

// Ex: [7, 10, 12, 7, 9 ,14] => [ 7, 10, 19, 19, 28, 33]

  // idx 0 => 1st number in input array so total max sum w/no adjacent #s is just 7
  // idx 1 => can't add 7 and 10 together b/c adjacent so take the greater of the two #s which is 10
  // idx 2 => can add 7 + 12 to get 19 which is greater than 10
  // idx 3 => get 19 by adding the 1st 7 and 12 together (didn't use the 7 at idx 3)
    // or could add 10 + 7 = 17
    // or could add 7 + 7 = 14
  // idx 4 => 7 + 12 + 9 = 28
  // idx 5 => 7 + 12 + 14 = 33

// Formula
  // maxSums[i] = max sum of the greatest value between 2 values =>
    // maxSums[i] = max(maxSums[i - 1], maxSums[i - 2] + array[i])

  // Ex: how to determine max sum at idx 5 of new array
    // maxSums[5] = max(28, 19 + 14) => max(28, 33) => 33


// Time complexity O(n) where n is length of input array
  // have to iterate through array once and apply formula to every index

// Space complexity O(n) where n is length of input array
  // building an array of length n
  // can do better than this!
    // Only need to store values of maxSums[i - 1] and maxSums[i - 2]

// Store only the previous 2 values of maxSums array as first and second
  // first = maxSums[i - 1]
  // second = maxSums[i - 2]

// store the current greatest sum as current
  // current = max(first, second + array[i])

// at end of each iteration, must update value of first and second
  // first = current
  // second = first

// Space complexity is now O(1) 
  // only storing 2-3 values at any point in time


// O(n) Space complexity Version: 
function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];
  
    // copy input array
      // this ensures 1st base case maxSums[0] = array[0]
    let maxSums = array.slice(0);
    // 2nd base case gets max value of the 1st 2 values
    maxSums[1] = Math.max(array[0], array[1]);
  
    for (let i = 2; i < array.length; i++) {
      maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
    }
    // return the last value in maxSums 
    return maxSums[maxSums.length - 1];
}
  
// O(1) Space complexity Version: 
function maxSubsetSumNoAdjacent(array) {
    if (array.length === 0) return 0;
    if (array.length === 1) return array[0];

    let second = array[0];
    let first = Math.max(array[0], array[1]);

    for (let i = 2; i < array.length; i++) {
        // current is maxSums of i
        let current = Math.max(first, second + array[i]);
        // update second, then first
        second = first;
        first = current;
    }
    return first;
}

maxSubsetSumNoAdjacent([75, 105, 120, 75, 90, 135])