// Given an array of + integers representing the values of coins in your possesion, write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.
  // the given coins can have any + integer and aren't necessarily unique
  // can mutate the input array

// [ ] => 1
// [7] => 1
// [1,2,5] => 4
// [5,7,1,1,2,3,22] => 20

// Brute force
  // loop through all the + integers until you hit one that you can't create
  // start at 1, then 2, etc until hit a num you can't create


// Optimal solution
  // When you go coin by coin, if you ever hit a coin that has a value that's GREATER than amount of change we can make with the previous coins plus 1, that means you CAN'T make the amount of change you can make with previous coins plus 1

  // If the current coin is less than or equal to our change plus 1, can make all of the change previously and then all of the change BETWEEN what we can make previously and this new coin

  // SORT the input array in ASC order 

  // create variable that tracks how much change you can currently make
    // change = k
    // can make all the values from 1 ... up to k

  // iterate through array starting at idx 0
    // if first value isn't 1, then return 1 as the minimal value that you can't make

    // if coin value is <= amount of change you can currently create plus 1
      // add the value of the coin to the amount of change you can currently create up to

    // if reach scenario where the coin your adding to change is greater than the change plus 1
      // return value of change plus 1
      // this is the minimum value of change that you can't create
    
    // if reach end of list (got through all the coins), whatever the change is at that point, can't make more than 1 more than that
  


function nonConstructibleChange(coins) {
    coins.sort((a,b) => a - b)
    
    let currChange = 0;
    
    for (let coin of coins) {
        if (coin > currChange + 1) {
        return currChange + 1;
        }
        currChange += coin;
    }
    return currChange + 1;
}
    
console.log(nonConstructibleChange([5,7,1,1,2,3,22])) // 20
    
// time complexity O(n log n)
    // sorting the input array
    // iterating through array once is O(n)

// space compleity O(1)
    // sort input array IN PLACE