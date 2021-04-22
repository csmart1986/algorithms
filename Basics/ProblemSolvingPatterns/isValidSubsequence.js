// Pointers
//given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.  Subsequence is a set of #s that don't need to be adjacent but order is MAINTAINED.
  // arrays sorted? no
  // can be + or - integers? yes
  // can use array methods?  yes
  // result if 2nd array longer than 1st array?  false
  // can values repeat? yes

function isValidSubsequence(arr1, arr2) {
    // 2nd array longer than 1st array return false
    if (arr2.length > arr1.length) return false;
    // both pointers start at the beginning of their resepective arrays
    let pointer1 = 0;
    let pointer2 = 0;

    // loop breaks if either both have reached the end of their arrays (is a subsequence) or pointer1 has reached the end of array1 only (not a subsequence)
    while (pointer2 < arr2.length && pointer1 < arr1.length) {
      // only if current value at both pointers match than move pointer2 one position right
      if (arr1[pointer1] === arr2[pointer2]) {
        pointer2++; 
      }
      // always move pointer1 one position to maintain order
      pointer1++;
    }
    // if pointer2 has made it to end of array2 => true (subsequence)
    return pointer2 === arr2.length
}