// take an array of strings and capitalize the first letter of each string in the array.  Return an array of strings with only first letter capitalized.
  // will characters always be an alpha char?  yes
  // if get empty array?  return []
  // will you get an empty string?  no

function capitalizeFirst (arr) {
    // will reset to empty each time make recursive call so will need to concat all resulting arrays together
    let newArr = [];
    // base case
    if (arr.length < 1) return newArr;
    // pull out 1st character of first string in array and capitalize it and combine it with the remaining letters of the string
    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1))
    // make recursive call on remaining strings in array other than first string
      // concat that resulting array with the previously generated array
    return newArr.concat(capitalizeFirst(arr.slice(1)))
}
  
  
//capitalizeFirst(['dog'])
capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
capitalizeFirst([])