// Given an ARRAY of distinct + integers representing coin denominations and a single non negative INTEGER n representing a target amount of money, write fx that returns the # of ways to make change for that target amount using the given coin denominations

  // Note that an unlisted amount of coins is at your disposal

// Input: n = 6, denoms = [1, 5]
// Output: 2 
  // (1 * 1) + (1 * 5) AND (6 * 1)

// Input: n = 10, denoms = [1, 5, 10, 25]
// Output: 4
  // (1 * 10), (2 * 5), ((1 * 5) + (5 * 1)) AND (10 * 1)

// Input: n = 9, denoms = [5]
// Output: 0



// create array that is length 11 called ways
  // every value stored at each index is the minimum # of ways we have to make change using the denominations to make change for the amount that is represented by the index

  // at index 0, have value 1.  The rest of the values are initalized as 0
    // if target is 0 dollars, the only way to make change for that is to use no coins => only 1 way to make change for $0 (BASE CASE)

// iterate through all denominations starting at idx 0
  // for each denomination, iterate through all the amounts and update the # of ways to make change for that amount

// Input: n = 10, denoms = [1, 5, 10, 25]
// start at 1st value (aka 1) in denominations array (idx 0)
  // Go to amount 0 in ways array
  // is 1st value <= to 0 (curr idx of denoms array)?
    // can we use that value to make amount 0?
    // if no, just skip that amount

// Go to amount 1 in ways array (idx 1)
  // Is 1st value (aka target amount) <= 1? 
    // if yes, update ways array 
      // ways[1] += ways[1 - 1]
      // ways[1] equals whatever we already have at ways[1] plus ways[target amount - coin denomination]

// Go to amount 2 in ways array (idx 2)
  // Is 1st value (aka target amount, or 1) <= 2?  
    // if yes, update ways array 
        // ways[2] += ways[2 - 1] => 0 + 1 => 1
        // number of ways to make change for $2 given only $1 coins is 1 way (2 $1 coins)

// Repeat process until get to end of ways array
    // if denom <= amount,
      // ways[amount] = ways[amount - denom]

// Move on to next denomination in denoms array & repeat the above process



function numberOfWaysToMakeChange(n, denoms) {
    // array of length n + 1 and fill with 0s
    const ways = new Array(n + 1).fill(0);
    // idx 1 is set to 1 (if target abmount is 0, there's only 1 way to make 0)
    ways[0] = 1;

    for (let denom of denoms) {
        // skip idx 0 b/c ways[0] = 1 will never change
        for (let amount = 1; amount < n + 1; amount++) {
            // check if current denomination can be used to make current amount
            if (denom <= amount) {
                // ways[amount] = ways[amount] + ways[amount - denom]
                ways[amount] += ways[amount - denom];
            }
        }
    }
    return ways[n];
}

console.log(numberOfWaysToMakeChange(9, [5])) // 0
console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25])) // 4

// time complexity O(nd) where n is the target amount and d is number of coin denominations
    // iterating through each denomination, and for each denomination, we're iterating through array of length n + 1

// space complexity O(n)
    // creating array of length n
