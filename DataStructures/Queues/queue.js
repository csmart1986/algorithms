// using a singly linked list to make a QUEUE
// FIFO => first in, first out!!!

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    
    // ADD NODE TO END OF QUEUE
    enqueue(val) {
      let newNode = new Node(val);
      // if empty queue
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      }
      // add new node to end of queue and make it the last node
      else {
        this.last.next = newNode;
        this.last = newNode;
      }
      return ++this.size;   
    }
    
    // RETURN FIRST NODE ADDED TO QUEUE (remove from beginning of queue) 
    dequeue() {
      // queue is empty
      if (!this.first) return null;
      let temp = this.first;
      // if only 1 item in queue
      if (this.first === this.last) {
        this.last = null;
      }
      // update first node to be the next item in queue
      this.first = this.first.next;
      this.size
      // return value of node removed (which was the first node added to queue)
      return temp.value;
    }
  }
    
  
  let queue = new Queue()
  // add a node to end of queue
  queue.enqueue('FIRST')
  queue.enqueue('SECOND')
  queue.enqueue('THIRD')
  
  console.log('QUEUE: ', queue)
  // remove & return the first node that was added (so located at the beginning) of queue
  console.log('RETURNED NODE: ', queue.dequeue())
  console.log('RETURNED NODE: ', queue.dequeue())
  console.log('RETURNED NODE: ', queue.dequeue())
  console.log('RETURNED NODE: ', queue.dequeue())
  
  // time complexity for insertion and removal (enqueue, dequeue) is O(1) constant!
    // vs. array where you potentially have to reindex all the elements
  
  // time complexity for accessing and searching is O(n) 
    // there are better DS to do this