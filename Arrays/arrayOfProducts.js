// fx that takes in a non empty array of integers and returns an array of same length where each element in the output array is equal to the product of every other number in the input array

  // the value at output[i] is equal to the product of every number in the input array other than input[i]
  
  // solve this problem W/O using division

  // can't modify input array

// input = [5, 1, 4, 2]
// output = [8 , 40, 10 , 20]
  // 8 is equal to 1 * 4 * 2
  // 40 is equal to 5 * 4 * 2
  // 10 is equal to 5 * 1 * 2
  // 20 is equal to 5 * 1 * 4


// Brute force
  
  // Nested for loop with i and j iterators
    // j will iterate through all the values for EACH value of i
    // i and j both start at 0

  // store current product calculated as going through each iteration
    // intiate as 1
    // reset value every time move i

  // check if i === j
    // if yes, don't do anything since don't want to add this value to product we're trying to calculate
      // move j over 1 position

    // if no, multiple current product by value at index j
      // move j over 1 position
  
  // when finish inner loop with j
    // reset j back to beginning of array
    // insert current product into new array at index 0

  // move i over 1 position 
    // reset current product back to 1
    // repeat whole process

  // when i finishes with last element in input array, the new array is filled with the products and we're done
    // return new array

  // O(n**2) time complexity
    // nested for loop

  // O(n) space complexity
    // output array contains n elements

function arrayOfProducts(array) {
    let products = [];
    for (let i = 0; i < array.length; i++) {
        // redefine this at every iteration of i
        let runningProduct = 1;
        for (let j = 0; j < array.length; j++) {
        if (i !== j) {
            runningProduct *= array[j];
        }
        }
        // set the product that was just calculated at the postion i in output array
        products[i] = runningProduct;
    }
    return products;
}
      
      
// Optimized approach
// storing multiplication we've done already so avoid having to do repeated multiplication

// Get product of all the values to the LEFT of the curr element at i and product of all the values to the RIGHT of the curr element at i
    // then multiple them together to get the product that should go in position i of new array

// initalize 2 new arrays with values 1 (LEFT and RIGHT)
    // at some position, have the product of all values to the LEFT of this position in the input array
    // at some position, have the product of all values to the RIGHT of this position in the input array

// create product variable initalized to 1

// loop over all values in input array
    // i starts at idx 0
    
// insert current product into the left array at whatever position i is at

// multiply our product by whatever the value is at this postion

// move i over, repeat the last 2 steps

// when i is done, have finished filling out LEFT array (all products to LEFT of whatever the position is in this array)

// do the same thing for RIGHT array in reverse
    // i starts at end of array b/c fill in array from R to L
    // product starts at 1
    // repeat the process as with left array

// when i is done, have finished filling out RIGHT array

// initalize a final output array with values of 1

// loop thru L and R array at same time and multiply values at corresponding indices
    // resulting product goes into final output array at that specific position

// return final output array

// O(n) time complexity
    // create L and R arrays takes O(n + n) time
    // create output array takes O(n) time
    // O(n + n + n) => O(3n) => O(n)

// O(n) space complexity
    // n space for L, R, and output array
    // O(n + n + n) => O(3n) => O(n)

function arrayOfProducts(array) {
    let products = [];
    let leftProducts = [];
    let rightProducts = [];

    // fill in L array
    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
    leftProducts[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
    }

    // fill in R array (go R to L through input array)
    rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
    rightProducts[i] = rightRunningProduct;
    rightRunningProduct *= array[i];
    }
    
    // fill in output array
    for (let i = 0; i < array.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
    }
    return products;
}


// Most optimized approach
// avoid having a L and R array, rather just have on single extra array
    // take what's in L array and multiply it by what would have been inserted into R array

// return the array 

// O(n) time complexity
    // 1 less loop we need to do

// O(n) space complexity
    // 2 less arrays we need to use

function arrayOfProducts(array) {
    let products = [];

    let leftRunningProduct = 1;
    for (let i = 0; i < array.length; i++) {
        // instead of modifying separate L array, just modify products at i
        products[i] = leftRunningProduct;
        leftRunningProduct *= array[i];
    }
    // now all the L products are in products array

    let rightRunningProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        // modify right product by whatever value is currently in products array
        products[i] *= rightRunningProduct;
        rightRunningProduct *= array[i];
    }
    return products;
}

// time  complexity O(n) where n is length of input array

// space complexity O(n)