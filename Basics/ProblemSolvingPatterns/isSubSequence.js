// Multiple pointers

// fx that takes in 2 strings and checks to see if chars in 1st string appear SOMEWHERE in 2nd string WITHOUT CHANGING THE ORDER.  
  // just letters or can there be nonalpha chars, spaces?  yes
  // does casing matter?  all lowercase
  // if given empty string? 
  // chars dont need to be right next to eachother as long as order is maintained? yes

function isSubsequence(targetStr, searchStr) {
    let targetIdx = 0;
    let searchIdx = 0;
    // if targetStr is null or undefined
    if (!targetStr) return true;
    // while search pointer hasn't reached end of searchStr
    while (searchIdx < searchStr.length) {
        // if curr char in searchStr is equal to curr char in targetStr, move target pointer 1 postion
        if (searchStr[searchIdx] === targetStr[targetIdx]) targetIdx++;
        // if found total num of chars equal to targetStr length, you have found the correct subsequence of chars
        if (targetIdx === targetStr.length) return true;
        // always move search pointer 1 position
        searchIdx++;
    }
    return false;
}

// time complexity O(n) where n is length of longer string (using only 1 while loop over 1 array), space O(1)

// RECURSIVE
function isSubsequence(str1, str2) {
    // base cases
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    // if first letter in both strings are the same, make recursive call on both sliced strings (removed the 1st letter of each string)
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1)) 
    // if they arent the same letter, make recursive call leaving str 1 as is and remove 1st letter off str 2 
    return isSubsequence(str1, str2.slice(1))
}

isSubsequence('abc', 'acb')  // false
isSubsequence('sing', 'sting') // true
isSubsequence('hello', 'hello world') //true
isSubsequence('abc', 'abracadabra') // true

