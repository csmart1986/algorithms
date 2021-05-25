// You're given an array of non negative integers where each non zero integer represents the height of pillar of width 1.  Imagine water being poured over all the pillars.  Write fx that returns surface area of the water trapped b/t pillars viewed from the front.  Note that spilled water should be ignored.

// Each integer = HEIGHT of pillar
// Pillar has WIDTH of 1

// Return total surface area of the water
  // water gets trapped in b/t pillars

//  [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3] => 48
// DRAW THIS OUT!!!

// Approach => DYNAMIC PROGRAMMING
  // Pattern
    // Calculate for each index in array, how much water is going to be contained right above a index.  Depends on...

      // HEIGHT of pillar stored at that index
        // 0 = no pillar

      // WHERE is that INDEX?  Is it b/t 2 pillars?
        // If NO pillar to one side of index, water will spill out

        // If there is a pillar to the LEFT side of index, water will be trapped up to height of pillar
          // Is there also pillar/s to RIGHT side of index?
            // Doesn't need to be directly adjacent to index
            // TAllEST pillar to right is what matters

        // What is the TALLEST pillar to left AND right of the index
          // water is going to be trapped b/t these 2 pillars
            // What is the SHORTER height of these 2 pillars
              // Any water trapped b/t these 2 pillars will spill over the shorter pillar so trapped water height is limited by shorter pillar

        // Is there a shorter pillar b/t the 2 tallest pillars?
          // Get the trapped water amount ABOVE that pillar,
            // Difference b/t height of the shortest of the 2 tallest pillars and the height of current pillar


// Make new array of same length as input array, and at each index, store the TALLEST PILLAR height to LEFT of CURRENT INDEX that we're at
  // leftMaxHt = [0, 0, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10]

// Do the same with TALLEST PILLAR to RIGHT of CURRENT index (iterate backwards)
  // rightMaxHt = [10, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 0]

// Make a new array that contains WATER AMOUNT ABOVE EACH INDEX
  // At each index, declare a minHeight
    // minHeight = min value b/t the leftMaxHt and rightMaxHt at current index

  // currHeight = PILLAR height at curr index

  // if currHeight < minHeight, then there's room for water to be trapped at given index
    // waterAmt = minHeight - currHeight
    // else, waterAmt = 0

    // [0, 0, 8, 8, 3, 8, 8, 0, 3, 3, 2, 2, 3, 0]

  // now sum up all elements in array to get answer


// Time complexity => O(n) where n is length of input array
  // iterate through array once to create leftMaxHt array => O(n)
  // iterate through array once to create rightMaxHt array => O(n)
  // iterate through array once to create waterAmt array => O(n)
    // getting minHeight and comparing minHeight with currHeight is constant time

// Space complexity => O(n)
  // build 3 arrays with length n


// SEE BELOW: can do this in 2 for loops instead of 3 (doesn't change time/space complexity)  
function waterArea(heights) {
    // create new array with length equal to heights and populated w/0s
    const maxes = new Array(heights.length).fill(0);
  
    // the first index never has a pillar left to it
    let leftMax = 0;
    for (let i = 0; i < heights.length; i++) {
      // grab pillar height at curr index
      const currHeight = heights[i];
      // store the TALLEST PILLAR height to LEFT of CURRENT INDEX that we're at
      maxes[i] = leftMax;
      // update max for next iteration to be either leftMax or current ht that we're at
      leftMax = Math.max(leftMax, currHeight);
    }
  
    // instead of creating new array for right maxes, gonna re-store right maxes in maxes array
    // the last index never has a pillar right to it
    let rightMax = 0;
    for (let i = heights.length - 1; i>= 0; i--) {
      const currHeight = heights[i];
      // get min value b/t the leftMaxHt and rightMaxHt at current index
      const minHeight = Math.min(rightMax, maxes[i]);
      // if currHeight < minHeight, then there's room for water to be trapped at given index
      if (currHeight < minHeight) {
        // get the amount of water at that index
        maxes[i] = minHeight - currHeight;
      }
      else {
        maxes[i] = 0;
      }
      // update max for next iteration to be either rightMax or current ht that we're at
      rightMax = Math.max(rightMax, currHeight);
    }
    return maxes.reduce((a,b) => a + b, 0);
  }
  