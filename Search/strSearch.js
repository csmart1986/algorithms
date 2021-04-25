// naive version of string search

function strSearch(mainStr, searchStr) {
    let count = 0;
    // loop over longer string and pull out every letter
    for (let i = 0; i < mainStr.length; i++) {
      // loop over substring, compare current letter in substring to current letter in longer string
      for (let j = 0; j < searchStr.length; j++) {
        // while in inner loop, use i + j to increment current letter index of mainStr (otherwise, main string current letter idx doesn't increment until fail to find a match and break to outer loop again)
        if (mainStr[i + j] !== searchStr[j]) {
          // if the two letters don't match... break out of inner loop and start looping from next letter in longer string
          break;
        }
        // if index at j is at the end of search string, than have found an instance of searchStr
        if (j === searchStr.length - 1) {
          count++;
        }
      }   
    }
    // reached the end of main string, return final count
    return count;
  }
  
  //strSearch('dogcatdogcat', 'cat')
  //strSearch('dogcacat', 'cat')
  //strSearch('dogcatdog', '')
  strSearch('dogcatdog', 'cats')