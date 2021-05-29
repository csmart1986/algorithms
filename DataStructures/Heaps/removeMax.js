// REMOVE the ROOT (biggest value) of MAX BINARY HEAP

// create heap class
class maxBinaryHeap {
    constructor() {
      this.values = [55,39,41,18,27,12,33];
    }
  
    // remove max element in heap
    extractMax() {
      // grab 1st element 
      const max = this.values[0];
      // pop off last element and grab it
      const end = this.values.pop();
      // only do this if the array isn't empty (otherwise you pop off last element and then put it back in again)
      if (this.values.length > 0) {
        // replace 1st element with last element (but likely not in correct place)
        this.values[0] = end;
        this.sinkDown();
      }
      // return extracted element
      return max;
    }
  
    sinkDown() {
      // start at root
      let idx = 0;
      const length = this.values.length;
      // grab value of current root element - this will be the parent element
      const elem = this.values[0];
      //
      while (true) {
        // get the two child indices and values
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        // keep track of position that we're gonna swap with
        let swap = null;
  
        // make sure that the child is within bounds
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          // condition to swap with left child
          if (leftChild > elem) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          // condition to swap with right child 
          if (
            // if never swapped with left child (b/c elem > left child)
            (swap === null && rightChild > elem) || 
            // OR swap occured w/leftChild but rightChild is > leftChild
            (swap !== null && rightChild > leftChild)
            ) {
              swap = rightChildIdx;
            }
        }
        // there's no child greater than element
        if (swap === null) break;
        // make the swap b/t parent and child element
        this.values[idx] = this.values[swap];
        this.values[swap] = elem;
        // reassign index to the child element's index
        idx = swap;
      }
    }
  }
  
  let heap = new maxBinaryHeap();  // [55,39,41,18,27,12,33]
  console.log('BEGINNING HEAP: ', heap)
  console.log('Removed: ', heap.extractMax());
  console.log('END HEAP: ', heap)
  console.log('BEGINNING HEAP: ', heap)
  console.log('Removed: ', heap.extractMax());
  console.log('END HEAP: ', heap)