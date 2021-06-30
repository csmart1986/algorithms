// can be duplicate heights in a single array
// a height in one array can also appear in the other array
// NOT sorted
// allowed to modify input arrays

function classPhotos(redShirtHeights, blueShirtHeights) {
    // sort in DESCENDING order so largest elements come first
    redShirtHeights.sort((a,b) => b - a);
    blueShirtHeights.sort((a,b) => b - a);
  
    // determine which color is the back row by finding which array has the biggest 1st number
    const backRow = redShirtHeights[0] > blueShirtHeights[0] ? 'RED' : 'BLUE';
    
    for (let i = 0; i < redShirtHeights.length; i++) {
      // compare the red and blue student height at each index
      const currRed = redShirtHeights[i];
      const currBlue = blueShirtHeights[i];
  
      // Back row is red and all students must be taller than blue row
      if (backRow === 'RED') {
        if (currRed <= currBlue) {
          return false;
        }
      }
      // Back row is blue and all students must be taller than red row
      else {
        if (currBlue <= currRed) {
          return false;
        }
      } 
    }
    return true;
  }
  
  console.log(classPhotos([5,8,1,3,4],[6,9,2,4,5])) // true
  
  // Time complexity O(n log n)
    // SORT both the red and blue heights arrays => 2 x (n log n) => n log n
    // loop over array is in n time 
    // O(n log n) outweighs O(n) time
  
  // Space complexity O(1)
    // sorting IN PLACE