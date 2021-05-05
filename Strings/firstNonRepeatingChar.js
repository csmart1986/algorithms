// fx that takes in a string of LOWERCASE English alphabet letters and returns the INDEX of the string's FIRST non-repeating character.
// the first non repeating character is the first character in the string that occurs only once
// if the input string doesn't have any non repeating characters, your function should return -1

function firstNonRepeatingChar(str) {
    // create hash table to keep track of frequencies of letters in input string
    const hash = {};
    // LOOP 1
    // put each char into hash table as key and their total frequency in the input string as their values
    for (let i = 0; i < str.length; i++) {
      const currLett = str[i];
      if (!hash[currLett]) {
        hash[currLett] = 1;
      }
      else hash[currLett]++;
    }
    // LOOP 2
    // Start from beginning of input string and look up each letter's frequency count in hash table.  As soon as you find a count of 1, you have found 1st occurance of non repeating letter.  Return its index.
    for (let i = 0; i < str.length; i++) {
      const currLett = str[i];
      if (hash[currLett] === 1) return i;
    }
    // have checked every letter in input string and they all have frequency counts greater than 1 so no non repeating letters
    return -1;
}
  
firstNonRepeatingChar('abcdcaf') //1
//firstNonRepeatingChar("faadabcbbebdf") //6
//firstNonRepeatingChar('aaaaa') // -1

// time complexity = O(n) where n is length of input string
    // not O(n**2) b/c the 2 for loops aren't nested
// space complexity = O(1) b/c hash table won't ever have more than 26 lowercase characters as keys