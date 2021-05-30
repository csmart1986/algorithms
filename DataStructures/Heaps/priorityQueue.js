// create a PRIORITY QUEUE with  MIN BINARY HEAP

// create priority queue class
class PriorityQueue {
    constructor() {
      this.values = [];
    }
    // Insert into queue
    enqueue(val, priority) {
      // make new node
      let newNode = new Node(val, priority);
      // insert node at the end
      this.values.push(newNode);
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
        if (elem.priority >= parent.priority) break;
        // swap the values
        this.values[parentIdx] = elem;
        this.values[idx] = parent;
  
        // update index to be the old parent index
        idx = parentIdx;
      }
    }
  
    // Remove from queue
    dequeue() {
      // grab 1st element 
      const min = this.values[0];
      // pop off last element and grab it
      const end = this.values.pop();
      // only do this if the array isn't empty (otherwise you pop off last element and then put it back in again)
      if (this.values.length > 0) {
        // replace 1st element with last element (but likely not in correct place)
        this.values[0] = end;
        this.sinkDown();
      }
      // return extracted element
      return min;
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
          if (leftChild.priority < elem.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          // condition to swap with right child 
          if (
            // if never swapped with left child (b/c elem > left child)
            (swap === null && rightChild.priority < elem.priority) || 
            // OR swap occured w/leftChild but rightChild is > leftChild
            (swap !== null && rightChild.priority < leftChild.priority)
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
  
  // create NODE CLASS
  class Node {
    constructor(val, priority) {
      this.val = val
      this.priority = priority;
    }
  }
  
  let ER = new PriorityQueue();  
  ER.enqueue('cold', 5);
  ER.enqueue('gunshot', 1);
  ER.enqueue('high fever', 4);
  ER.enqueue('broken arm', 2)
  ER.enqueue('glass in foot', 3)
  console.log('STARTING QUEUE: ',ER)
  
  console.log(ER.dequeue())
  console.log(ER.dequeue())
  console.log(ER.dequeue())
  console.log(ER.dequeue())
  console.log(ER.dequeue())
  console.log('FINAL QUEUE: ', ER)
  
  // This algorithm doesn't guarantee order between sibling nodes on the same level of the heap (tree)
    // It just cares about a parent's relationship to its 2 children