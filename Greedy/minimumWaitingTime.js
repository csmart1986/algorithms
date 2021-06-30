// fx that returns the minimum amount of total waiting time for all of the queries.  Given a non empty array of + integers representing the amounts of time that specific queries take to execute.  Only 1 query can be executed at a time, but the queries can be executed in ANY order.

  // allowed to mutate input array
  // waiting time = amount of time that it must wait before its execution starts
    // 2nd query waiting time is the duration of the 1st query
    // 3rd query is the sum of the durations of the first 2 queries
    

function minimumWaitingTime(queries) {
    // sort in ASCENDING order => this order ensures minimum waiting time by having smaller #s first
    queries.sort((a,b) => a - b);
    
    // keep track of total time of ALL subqueries summed together
    let runningSum = 0;
    // keep track of individual query time
    let subTotal = 0;
    
    // loop up to 2nd to last query (only care about the accumlated time up to start of last query)
    for (let i = 0; i < queries.length - 1; i++) {
        const currNum = queries[i];
        subTotal += currNum;
        // add the current query time to total time of all queries
        runningSum += subTotal;
    }
    return runningSum;
}
    
minimumWaitingTime([3,2,1,2,6])  // 17
minimumWaitingTime([1,4,5])

// time complexity O(n log n) where n is number of queries (length of array)
// sorting is n log n

// space complexity O(1)