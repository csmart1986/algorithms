// fx that takes in a string and returns its longest substring w/o duplicate characters
// there will only be one longest substring w/o duplication

// keep track of LAST SEEN index of each letter
  // store in hash table { letter : index }
  // if letter not in hash table, add it
  // if letter in hash table, update value with last seen index

// mark a starting index (point at 0 initially, no duplicate chars at this point) = most recent index from which you could start a substring w/no duplicate charaters, ending at your current index
  // update startIdx whenever duplicate char is found
  // startIdx = maximum of the current startIdx and the last seen position of our current character + 1
    // startIdx = max(startIdx, hash[char] + 1)
  // now if want to look at a substring that ends with our current char, we have to start at index that's at startIdx

// keep track of longest substring as an ARRAY 
  // [starting IDX of current longest str, IDX that comes right after current longest str]
  // will use these values to return slice of substring at end

// clementisacap => mentisac
// {c: 10, l: 1, e: 2, m: 3, n: 5, t: 6, i: 7 , s: 8, a: 9, p: 12}


function longestSubstring(str) {
    const hash = {};
    // initially the longest substring w/o duplication is the 1st letter
      // str.slice(longest[0],longest[1]) => str starts & ends at idx 0
    const longest = [0, 1];
    let startIdx = 0;
  
    for (let i = 0; i < str.length; i++) {
      const currChar = str[i];
      // if char has already been seen, update startIdx
      if (hash[currChar]) {
        startIdx = Math.max(startIdx, hash[currChar] + 1);
      }
      // take the difference b/t position right after string & position of 1st letter in string
      // if that difference is less than difference b/t idx right after where current substring ends - startIdx
        // then update longest
      if ((longest[1] - longest[0]) < (i + 1 - startidx)) {
        longest = [startIdx, i + 1]
      }
      hash[char] = i;
    }
    return str.slice(longest[0], longest[1]);
  }
  // time complexity is O(n) where n is length of input starting
    // iterating over the string
    // updating startIdx, comparing length of strs, and accessing/putting values in hash table are constant time
  
  // space complexity is O(min(n, a))
    // n is length of string
    // a is length of alphabet that is represented in our string
      // set of unique letters present in given string