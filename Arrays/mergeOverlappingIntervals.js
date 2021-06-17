// fx that takes in a non empty array of arbitrary intervals, merges any overlapping intervals, and returns the new intervals in NO particular order
  
  // each interval is an array of 2 integers, with interval[0] as the START of the interval and interval[1] as the END of the interval
  
  // back to back intervals aren't considered to be overlapping
    // [1,5] and [6,7] aren't overlapping
    // [1,6] and [6,7] are overlapping

  // START of any particular interval will always be <= to END of that interval

// intervals = [ [1,2], [3,5], [4,7], [6,8], [9,10] ]
// output = [ [1,2], [3,8], [9,10] ]

  // merge the intervals [3,5], [4,7], and [6,8] into [3,8]
  // [1,2] and [9,10] stay the same
  // order doesn't matter!



// interval = range of #s
  // OVERLAPPING intervals if share any of the #s in the range

// interval w/ NO overlapping values still gets added to returned array

// if one interval has SAME END value as the START value of another interval, they're overlapping

// compare end of 1st interval to start of 2nd interval 
  // if end >= start, they overlap!
  // the end element must lie between the values in the 2nd interval

// only works if intervals being compared are SORTED in ASCENDING ORDER!!!
  // whatever we pick for interval 1, has a START value that is <= to START value of interval 2


// PSEUDOCODE
// SORT input array by STARTING value

// intialize output array

// iterate through entire array 

// compare current interval to LAST interval in OUTPUT array (b/c want to compare to the MERGED interval array)
  // if NO overlap, add it to output array, advance to next interval 

  // if there is a overlap, MERGE 2 intervals together
    // will modify the interval that's already in output array (vs. adding another interval)
    // keep START value of 1st interval 
    // take MAX of END value of both intervals
      // could have interval that covers an entire other interval
        // ex: [2,5] and [3,4]
    // update the interval in output array

// return output array

function mergeOverlappingIntervals(intervals) {
    // sort by STARTING val in ASCENDING order
  let sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);
  const mergedIntervals = [];
  let currInterval = sortedIntervals[0];
  // need to have at least 1 interval in our mergedIntervals array to make comparision to
    // (modifications to currentInterval will be reflected in mergedIntervals)
  mergedIntervals.push(currInterval);

  for (const nextInterval of sortedIntervals) {
    // don't care about starting variable of currentInterval
    const [ _, currentIntervalEnd ] = currInterval;
    const [ nextIntervalStart, nextIntervalEnd ] = nextInterval;

    // compare new interval to currentInterval (represents the previous interval that was potentially merged)
    // there's OVERLAP
    if (currentIntervalEnd >= nextIntervalStart) {
      // reassign ending value in current interval as needed
      currInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
    }
    // NO overlap
    else {
       currInterval = nextInterval;
       mergedIntervals.push(currInterval)
    }
  }
  return mergedIntervals;
}

// time complexity O(n log n) b/c sorting the input array
  // all other steps take a shorter time

// space complexity O(n) where n is number of intervals in output array
  // if no overlapping intervals