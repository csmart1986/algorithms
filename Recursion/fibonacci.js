// Fibonacci Sequence is defined as follows:  the 1st # in the sequence is 0, the second # is 1, and the nth # is the sum of the (n-1)th and (n-2)th numbers.
// Fx that takes an integer n and returns the nth Fibonacci #

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// getNthFib(1) = 0 b/c 0
// getNthFib(2) = 1  b/c 0, 1 


// fib(n) = fib(n - 1) + fib(n - 2) for n > 2



// BRUTE FORCE (lots of duplicated calls until hit base cases)
function getNthFib(n) {
    // base cases
    if (n === 1) return 0;
    else if (n === 2) return 1;
  
    else {
      return getNthFib(n - 1) + getNthFib(n - 2);
    }
  }
  
  // time complexity O(2**n)
    // each call involves 2 additional calls
      // at fib(6) we are also doing fib(5) and fib(4) and so on...
  
  // space complexity O(n) 
    // calls remain on the callstack until hit a base cases
    // have at most on callstack, n calls
  
  
  
  // RECURSIVE with MEMOIZATION (CACHING)
    // solution for n is fib(n - 1) + fib(n - 2)
    // store solutions in a hash table and access them in O(1) time
      // hash = { n : solution}
      // if n is in hash table already, just return the solution for n (aka. hash[n])
      // else store n and solution in hash table and return hash[n]
  
  function getNthFib(n, hash = {1: 0, 2: 1}) {
    if (n in hash) {
      return hash[n];
    }
    else {
      hash[n] = getNthFib(n - 1, hash) + getNthFib(n - 2, hash);
      return hash[n];
    }
  }
  
  // time complexity O(n) where n is n Fibonacci number
    // have to calculate the Fibonacci of every number once
  
  // space complexity O(n) 
    // frames on the callstack and the hash table to store values
  
  
  
  // ITERATIVE
    // have an array of the LAST TWO Fibonacci numbers
      // intialized to have 1st 2 fib numbers
    // keep track of number of fib calculations done w/counter
      // keep calculating next fib # while counter <= n
    // next fib # is equal to sum of the 2 #s in array
    // take 1st # in array and get rid of it 
    // take 2nd # in array and make it 1st # in array
    // get new fib # (next) and make it 2nd # in array
  
  function getNthFib(n) {
    // store LAST 2 fib #s, initalized to base case!!
    const arr = [0, 1];
    // already got 2 fib #s, now calculate the 3rd one
    let counter = 3;
    while (counter <= n) {
      const nextFib = arr[0] + arr[1];
      arr[0] = arr[1];
      arr[1] = nexFib;
      counter++;
    }
    // edge case to cover n = 1
    return n > 1 ? arr[1] : arr[0];
  }
  
  // time complexity O(n) 
    // have to calculate the Fibonacci of every number once
  
  // space complexity O(1)
    // no recursive calls
    // storing 2 values in array is constant space
  
  console.log(getNthFib(2)) // 1
  console.log(getNthFib(6)) // 5