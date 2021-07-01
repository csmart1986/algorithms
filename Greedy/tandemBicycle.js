// Both people pedal a tandem bike but the person that pedals faster dictates the speed of the bicycle
  // tandem speed = max(speedA, speedB)

// Given 2 lists of positive integers: one that contains speeds of riders wearing red shirts, one that contains speeds of riders wearing blue shirts.  
  // Each rider is represented by single positive integer which is the speed at which they pedal a tandem bicycle at.
  // both lists are === length

// Pair every rider wearing a red shirt with a rider wearing a blue shirt to operate a tandem bicycle

// Fx that returns the maximum possible total speed OR the minimum possible total speed of all of the tandem bicycles being ridden based on an input parameter, fastest
  // if fastest === true, return MAXIMUM possble total speed
  // otherwise, return MINIMUM total speed

// total speed = sum of the speeds of ALL the tandem bicycles being ridden 



function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let totalSpeed = 0;
  
    // if looking for MAX time, sort 1 array in DESC order and 1 array in ASC order
      // fastest speed is lined up with the least fastest speed
    // if looking for MIN time, sort both arrays in DESC order 
    redShirtSpeeds.sort((a,b) => a - b);
    fastest ? blueShirtSpeeds.sort((a,b) => b - a) : blueShirtSpeeds.sort((a,b) => a - b)
    
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      const currRed = redShirtSpeeds[i];
      const currBlue = blueShirtSpeeds[i];
        
      // add whichever speed is greater at current idx to totalSpeed
      totalSpeed += Math.max(currRed, currBlue)
    }
    return totalSpeed;
  }
  
  tandemBicycle([5,5,3,9,2], [3,6,7,2,1], true) // 32
  tandemBicycle([5,5,3,9,2], [3,6,7,2,1], false) // 25
  
  // Time complexity O(n log n) where n is number of tandem bicycles
    // sorting input arrays is n log n time
    // For loop is O(n) which is outweighed by sorting
  
  // Space complexity O(1)
    // sorting in place