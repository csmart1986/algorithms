// Frequency Counter or Multiple Pointers

// fx that accepts a variable # of arguments and checks whether there are any duplicates among the arguments passed in 
  // what if only 1 arg is passed?
  // can args be a mix of strings and numbers?
  // are args sorted in any way?

// Frequency Counter
function areThereDuplicates(...args) {  // rest parameter => indefinite # of arg as array
    // if only 1 arg, can't be duplicate
    if (args.length < 2) return false;
    const freqCount = {};
    for (let i = 0; i < args.length; i++) {
        let key = args[i];
        // if key already exists in freqCount, its a duplicate
        if (key in freqCount) return true;
        // doesnt exist yet so initialize it in freqCount
        else {
            freqCount[key] = 1
        }
    }
    return false;
}
// Time complexity O(n), space O(n)

// Multiple Pointers
function areThereDuplicates(...args) {  // rest parameter => indefinite # of arg as array
    // must sort values to ensure that you check every pair of values
    args.sort((a,b) => a > b ? 1: -1); 
    // one pointer at idx 0, other pointer at idx 1
    let pointer1 = 0;
    let pointer2 = 1;
    // loop until pointer2 gets to end of array
    while (pointer2 < args.length) {
        // if value at pointer1 is equal to value at pointer2, found duplicate!
        if (args[pointer1] === args[pointer2]) {
            return true;
        }
        // move both pointers forward 1 position so can compare the next pair of values
        pointer1++
        pointer2++
    }
    // reached the end of arr w/o finding any duplicates
    return false
}
// Time complexity O(n log n) due to sorting, Space O(1)

// 1 line solution!
function areThereDuplicates() {
    // use Set to remove duplicates args, then check if resulting # of args is the same as the original # of args passed to fx
    // True if size/length ISNT the same (duplicates!)
    return new Set(arguments).size !== arguments.length;
}
