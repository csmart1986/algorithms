// INSERT element into a MAX BINARY HEAP

// Define maxBinaryHeap class
class maxBinaryHeap {
    constructor() {
      // (normally,   would start as empty array that stores values)
      this.values = [41,39,33,18,27,12];
    }
  
    insert(element) {
      // insert element at the end
      this.values.push(element);
      // then 'bubble' it up to the correct spot
      this.bubbleUp();
    }
  
    bubbleUp() {
      // take index of item in order to find item's parent
  
      // keep track of location of newly inserted item, initally it is last item but may be swapped
      let idx = this.values.length - 1;
      // get value of element at the index
      const elem = this.values[idx];
  
      // if index is now 0, we know the element is the largest element so stop loop
      while (idx > 0) {
        // find the parent index and element based on child's index
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx];
        
        // don't swap
        if (elem <= parent) break;
        // swap the values
        this.values[parentIdx] = elem;
        this.values[idx] = parent;
  
        // update index to be the old parent index
        idx = parentIdx;
      }
    }
  }
  
  let heap = new maxBinaryHeap();
  console.log('ORIGINAL HEAP: ', heap)
  heap.insert(55);
  heap.insert(1)
  heap.insert(45)
  heap.insert(199)
  console.log('NEW HEAP: ',heap)