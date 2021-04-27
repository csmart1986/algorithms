// given a string, create fx that returns a boolean corresponding to whether that string is a palindrome (spelled the same backwards and forwards)
  // case insensitive?  yes
  // can there be numbers, spaces, special characters?  yes
  // what if string is empty or 1 character long?  return true
  // can use string methods? yes

// ITERATIVE w/POINTERS
function palindromeCheck(str) {
    // put pointers on either end of the string
    let start = 0;
    let end = str.length - 1;
    // loop for as long as start and end pointers don't pass each other (until you reach middle of string)
    while (start <= end) {
        // convert letters at both pointers to lowercase so they're the same casing
        if (str[start].toLowerCase() === str[end].toLowerCase()) {
            // if the characters at both pointers are the same, con't looping by moving start pointer 1 position right and end pointer 1 position left.  Compare letters at the new pointer position.    
            start++
            end--
        }
        // if ever the letters at both pointers dont match, return false (not a palindrome)
        else return false; 
    }
    // have matched all the characters in the string -> is a palindrome
    return true;
}

// RECURSIVE 
function palindromeCheck(str) {
    // base case -> if empty string or length of 1, it is a palindrome
    if (str.length <= 1) return true;
  
    let firstIdx = 0
    let lastIdx = str.length - 1;
    // if first and last letters don't match, not a palindrome
    if (str[firstIdx].toLowerCase() !== str[lastIdx].toLowerCase()) {
      return false;
    }
    // make recursive call on string that has its first and last letters sliced off
    else return palindromeCheck(str.slice(1,-1))
}

// time complexity O(n) where n is string length and must recurse through string n/2 times in order to return false
// space complexity O(n) b/c create n/2 additional calls on callstack when we slice off first/last chars of string

palindromeCheck('car') // false
palindromeCheck('!? 100 ABCcba 001 ?!') // true
palindromeCheck('racecar') // true
palindromeCheck('RaCecAr') // true
palindromeCheck('') // true
