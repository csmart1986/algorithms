// fx that takes a non-empty array of integers that are SORTED in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

    // if array is only 1 element?  return that element in new array
    // can be duplicates integers? yes
    // can be + or - integers? yes
    // can use array methods? yes

function sortedSquaredArray(arr) {
    const finalArr = [];
    // put a pointer on either ends of array (the smallest and biggest element b/c sorted)
    let left = 0;
    let right = arr.length - 1;
    // con't to loop as long as pointers don't pass eachother
    while (left <= right) {
        // get abs value of #s at each pointer so can ignore negative sign
        // Then compare the abs values.  Take the bigger abs value, square it, then add it to front of finalArr (so build finalArr from right -> left).
        // move the associated pointer either forward or back 1 position
        if (Math.abs(arr[left]) > Math.abs(arr[right])) {
            finalArr.unshift(arr[left] ** 2);
            left++;
        }
        else {
            finalArr.unshift(arr[right] **2);
            right--;
        }
    }
    return finalArr;
}
//sortedSquaredArray([1,2,3,4,5,6,7,8,9]) // [1,4,9,16,35,36,49,64,81]
//sortedSquaredArray([-5,-4,1,2,3]) // [1,4,9.16,25]
//sortedSquaredArray([1,3,3,5]) // [1,9,9,25]
sortedSquaredArray([1]) // [1]

// time complexity O(n) and space complexity O(n) where n is length of input array