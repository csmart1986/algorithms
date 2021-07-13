// fx that takes in an array of unique integers and returns an array of all permutations of those integers in no particular order.
  // if input array is empty, return an empty array

// input [1,2,3]
// output [ [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1] ]


// will have permutations that start with 1, start with 2, and start with 3

  // for all permutations that start with 1
    // we'll have a permutation that has 2 in 2nd position and we'll have permutation that has 3 in 2nd position
    // WONT have a permutation that has 1 in 2nd position

  // for all permutations that start with 2
    // repeat logic

  // for all permutations that start with 3
    // repeat logic

// so iterate through entire array and pick each value as 1st number 
  // temporarily remove it from the list

// from the remaining #s, pick a 2nd #
  // temporarily remove it from the list

// continue this until run out of #s in the list


// PSEUDOCODE

// create helper fx
  // takes input array of #s, current permutation that you're building, and  permuations array
  // if run out of #s in input array, have constructed a permutation!
    // append it to list of permutations

  // helper(arr, perm, perms) {
  //   Base case:
  //   if array is empty {
  //     have constructed a valid perm so add it to perms array
  //   }
  //   else if array is NOT empty { 
  //     for every num that's remaining in array {
  //       create a new array with the num removed
  //       make this num the next number in the permutation
  //       call the helper fx with the remaining numbers in new array, the new permutation where we've added this current num, and permutations array
  //       helper(newArr, newPerm, perms)
  //     }
  //   }
  // }

  function getPermutations(array) {
 
}

// time complexity O(n * n!) where n is length of input array
  // In FOR LOOP we're removing a # from array and creating a new permutation => both are O(n) operations
    // hit these lines of code as many times as call helper fx

  // will be n! (factorial) LEAVES in recursive tree representing all helper method calls
    // every permutation is length n 
    // every branch in tree has n total node (calls to helper fx)
    // so n! * n

  // O(n**2 * n!)

// space complexity O(n * n!)
  // storing all permutations in array
  // there are n! permutations
    // all n! permutations have length n
  // max calls on callstack is n (outweighed by n!)



// METHOD 2
// DONT create new arrays each time, instead do it in place
  // iterate through input array
    // build all permutations for this input array, IN this array by swapping numbers' positions


