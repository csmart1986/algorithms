// fx that takes an array of integers and return a nested array (length 2) where 1st array is all even #s, 2nd array is all odd #s
  // what if passed an empty array => return [[],[]]
  // can #s be + or negative?  yes
  // do #s need to be sorted in input or output array? no
  // can you use array methods? yes

function evenAndOdd(arr) {
    // grab all elements from arr except first one and put in new array
    let nextArr = arr.slice(1);
    // grab first element in original arr
    let number = arr[0];
    // base case
    if (arr.length === 0) {
      return [[], []]
    }
    else {
      // if current value is even, it should go in first nested array, odd in second nested array
      const idx = number % 2 === 0 ? 0 : 1
      // recursive call on sliced array 
      const multiDimArr = evenAndOdd(nextArr);
      // push curent # into 0 idx (first) nested array if even, 1 idx (second) nested array if odd
      multiDimArr[idx].push(number);
      // return array so next recursive call has it to work with
      return multiDimArr;
    }
  }
  
  //evenAndOdd([1,2,3,4,5,6])
  evenAndOdd([1,3,2,6,5,4])
  //evenAndOdd([1])
  //evenAndOdd([-2, 0])
  //evenAndOdd([])