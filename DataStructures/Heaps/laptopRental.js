// fx that returns the minimum number of laptops that the school needs to rent such that ll sutdents will always have access to a laptop when they need one

  // Given a list of time intervals during which students at a school need a laptop.  The time intervals are represented by pairs of integers [start, end] where 0 <= start < end.  Start and end don't represent real times so they may be greater than 24.

  // No 2 students can use laptop at same time but immediately after a student is done, another student can use that same laptop => bounds can OVERLAP!
    // if student rents laptop during time interval [0,2], another student can rent the same laptop during any time inteval starting with 2.

// ex: [[0,2], [1,4], [4,6], [0,4], [7,8], [9,11], [3,10]] => 3 laptops

// DRAW OUT number line DIAGRAM AND LOOK FOR OVERLAPPING TIMES and return maximum number of overlaps!!



// BRUTE FORCE
// Time complexity O(n**2)

// loop through every single interval and for each interval checking how many other intervals overlap with it
  // to check for OVERLAP
    // have to check if both start or end time in interval 1 are in between start and end time in interval 2, and vice versa = 4 comparisions



// 2nd METHOD
  // Time complexity O(n**2)
    // for each interval, must compare current interval start time to all the previous intervals ending times

  // SORT input by STARTING TIMES 
    // [[0,2], [0,4], [1,4], [3,10], [4,6], [7,8], [9,11]]

  // Create variable to keep track of # of laptops currently being used, start at 0
    // at 1st interval, increase laptop # to 1
    // won't ever decrease the # of laptops, only add to it

  // Check to see if you can use the laptop that the previous person using 
    // Compare START time of 2nd interval to the END time of 1st interval
      // [0, 2] vs. [0, 4] => 2 (end) vs. 0 (start)
    // if START time is < END time, it's overlapped and CAN'T use their laptop
        // increase laptop count by 1

  // Go to next interval [1, 4]
    // compare this START time (1) to BOTH of the END times of the previous intervals (2 & 4) of the laptops currently being used
    // there's overlap so need another laptop & increase count by 1

  // Repeat process at next interval [3, 10]
    // if ever find a START time that is AFTER an END time of a previous interval 
      // that laptop is currently NOT being used anymore and can be passed to person at current interval
      // [0, 2] vs. [3, 4] => 2 (end) is < 3 (start)
      // do NOT make any changes to current laptop count b/c can use the laptop that's no longer used

  // Repeat process at next interval [4,6]
    // don't need to compare to finished interval [0, 2]

  // Continue to end of array & return the final # of laptops



// 3rd Method - MIN HEAP 
  // Time complexity (n log(n))
    // sorting input array is n log(n)
    // every time insert/delete element from heap, it is log(n) 
      // potentially inserting/deleting element n times => n log(n)

  // Space complixity is O(n)
    // MIN HEAP can store at most n elements if all intervals overlap

  // MIN HEAP = tree like DS that tells us which elements are the minimum and allow us to access them in CONSTANT time
      // the minimum element is at top of tree and can be pulled out immediately
          // (first element in heap array = top)
      // INSERTING element in a heap and POP() is time complexity O(log n) to maintain heap property

  // Sort input array by starting time

  // Create a MIN HEAP to find if there's a laptop that is NO longer being used 
    // will tell us which time interval has the LEAST ENDING TIME
      // can avoid looking at all other previous time intervals that we already processed

  // When add intervals to MIN HEAP, sort them by their ENDING TIMES
    // interval on top of the heap has the MINIMUM ENDING TIME

  // 1st time interval [0, 2] we have starts out in MIN HEAP 

  // Go to next interval and compare STARTING time of this interval to ENDING time of whatever is on top of MIN HEAP
    // if END TIME <= START TIME, can use this laptop
    // else, CAN'T use this laptop

  // Since can't use laptop, insert the current time interval into the MIN HEAP
    // intervals get shifted automatically so that new top of MIN HEAP is going to equal interval w/shortest ENDING TIME
    // MIN HEAP = [[0,2], [0,4]]

  // When get to interval [3, 10], it's STARTING time is greater than ENDING time of interval [0, 2] at top of heap => can use it's laptop
    // MIN HEAP = [[0,2], [0,4], [1,4]]
    // REMOVE that interval from MIN HEAP b/c done using its laptop for that time period
    // Give laptop to interval [3, 10] by INSERTING it into MIN HEAP which triggers a reconfiguration of the heap
      // new MIN HEAP = [[0,4], [1,4], [3,10]]

  // when get to end of array, return LENGTH of MIN HEAP (represents maximum # of overlaps)
    // whenever an interval is removed from heap, a new interval is added right after 
      // size of heap may increase but will NEVER decrease



// 4th METHOD
  // Time complexity is O(n log n)
    // Sort the start and end time arrays
    // technicallly better than MIN HEAP version don't have a heap with insertion/deletion O(log n) operations
  
  // Space complexity is O(n) 
    // create start and end time arrays that contain n elements
    // technicallly worse than MIN HEAP version b/c its O(2n) since creating 2 arrays

  // *** Don't care which START and END time are associated w/each other as long as we know all start and end times ***
    // all of the STARTING times are stricly < all of the ENDING times

  // Create list of SORTED START TIMES
    // [0,0,1,3,4,7,9]

  // Create list of SORTED END TIMES
    // [2,4,4,6,8,10,11]

  // Know how many rentals START before one rental ENDS
    // Ex: 3 rentals start ([0,0,1]) before 1 rental [2] ends
      // need at least 3 laptops before 1 is freed up
  
  // Put a POINTER at the start of each list (i and j)
  
  // Compare values at index i and j
    // if ENDING time at j is <= STARTING time of whatever is at i 
      // can free up a laptop
        // REDUCE laptop count by 1
        // move j pointer (ENDING time) 1 position

      // The current rental now starts
        // INCREMENT laptop count by 1

      // move i pointer (STARTING time) 1 position

    // if ENDING time at j is > STARTING time of whatever is at i
      // 1 laptop rental has started (increment count)
      // move i pointer (STARTING time) 1 position

  // When i finishes going over all START times, we are done
    // don't need to go over all the END times b/c all of the rentals have started now
    // return final number of laptops


    function laptopRentals(times) {
        // NO laptops required
        if (times.length === 0) return 0;
      
        let usedLaptops = 0;
        // create lists of SORTED START (idx 0) and END (idx 1) times
        const startTimes = times.map(time => time[0]).sort((a,b) => a - b);
        const endTimes = times.map(time => time[1]).sort((a,b) => a - b);
      
        // Pointers (start at beginning of start & end times arrays)
        let startPointer = 0;
        let endPointer = 0;
      
        while (startPointer < startTimes.length) {
          // if NO OVERLAP...
          if (startTimes[startPointer] >= endTimes[endPointer]) {
            // free up a laptop
            usedLaptops--;
            endPointer++;
          }
          // start the next laptop rental (ALWAYS increment startPointer)
          usedLaptops++;
          startPointer++
        }
        return usedLaptops;
      }
      
      console.log(laptopRentals([[0,2], [1,4], [4,6], [0,4], [7,8], [9,11], [3,10]]))// 3