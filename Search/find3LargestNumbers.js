// fx that takes in an array of at least 3 integers and, W/O sorting the input array, returns a SORTED array of the 3 largest integers in the input array.
  // should return duplicate integers if necessary

// input [10, 5, 9, 10, 12] => output [10, 10 ,12]
// input [141, 1, 17, -7, -17, -27, 18, 541, 8, 7 ,7] => output [18, 141, 541]


// keep track and store 3 largest numbers as you traverse the array
  // create empty output array that will be length 3

// start iterating at beginning of array and grab current number

// check to see if there's a # in output array
  // if not, just update it with current number
  // if yes, compare it to the largest number in output array (at idx 2)

// if current number is < largest number in output array, compare it to number in output array at idx 1
  // if no number at idx 1, update idx 1 to contain that number
  // if current number is >= 2nd largest number in output array, SHIFT # at idx 1 to idx 0 AND place current number at idx 1

// if current number is less than number at idx 1 in output array, compare it to number in output array at idx 0
  // if no number at idx 1, update idx 1 to contain that number
  // if current number is >= number at idx 0, SHIFT number at idx 0 out of the output array and put current number in its place

// when get to end of input array, return output array
   

function findThreeLargestNumbers(array) {
    // contains 3 largest numbers
    const outputArr = [null, null, null];
    for (const num of array) {
      updateLargest(outputArr, num);
    }
    return outputArr;
  } 
  
function updateLargest(outputArr, num) {
    // compare curr num to largest num in output array
    if (outputArr[2] === null || num > outputArr[2]) {
        shiftAndUpdate(outputArr, num, 2);
    }
    // compare curr num to 2nd largest num in output array
    else if (outputArr[1] === null || num > outputArr[1]) {
        shiftAndUpdate(outputArr, num, 1);
    }
    // compare curr num to 3rd largest num in output array
    else if (outputArr[0] === null || num > outputArr[0]) {
        shiftAndUpdate(outputArr, num, 0);
    }
}

// takes in output array, the number we want to update in output array, and the last index in output array that we want to shift
// if updating 3rd largest number, we don't want to touch idx 1 or 2
// if updating largest number, want to shift idx 1 to 0 idx and 2nd idx to 1st idx, and then update largest number 
function shiftAndUpdate(array, num, idx) {
    for (let i = 0; i <= idx; i++) {
        if (i === idx) {
        array[i] = num;
        }
        else {
        array[i] = array[i + 1];
        }
    }
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7 ,7]))

// time complexity O(n) where n is length of input array
// must traverse entire array b/c its unsorted

// space complexity O(1) 
// output array is always length 3