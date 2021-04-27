// given a string, create fx that returns a boolean corresponding to whether that string is a palindrome (spelled the same backwards and forwards)
  // case insensitive?  yes
  // can there be numbers, spaces, special characters?  yes
  // what if string is empty or 1 character long?  return true

function palindromeCheck(str) {
    // put pointers on either end of the string
    let start = 0;
    let end = str.length - 1;
    // loop for as long as start and end pointers don't pass each other
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

palindromeCheck('car') // false
palindromeCheck('!? 100 ABCcba 001 ?!') // true
palindromeCheck('racecar') // true
palindromeCheck('RaCecAr') // true
palindromeCheck('') // true
