// using a singly linked list to make a STACK

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    // ADD NEW NODE TO BEGINNING OF STACK
    push(val) {
      // create a new node
      let newNode = new Node(val);
      // if stack is empty...
      if (!this.first) {
        // set first and last property to be new node
        this.first = newNode;
        this.last = newNode;
      }
      else {
        // store the current first node in the stack
        let temp = this.first;
        // make the new node node the first node in the stack
        this.first = newNode;
        // set the next node to be the old beginning node (so it comes after the new node)
        this.first.next = temp;
      }
      // return size of stack
      return ++this.size;
    }
    // REMOVE THE NODE AT THE BEGINNING OF STACK (which is the last node that was added)
    pop() {
      // if stack is empty
      if (!this.first) return null;
      // grab the first node in stack
      let temp = this.first;
      // there's only one item left in stack
      if (this.first === this.last) {
        this.last === null
      }
      // set first to be null, too, if this.last is null.  Otherwise set first to be next node.
      this.first = this.first.next;
      this.size--;
      // return value of node that was removed from stack
      return temp.value;
    }
  }
    
  
  let stack = new Stack()
  // add a node to beginning of stack
  stack.push('FIRST')
  stack.push('SECOND')
  stack.push('THIRD')
  
  console.log('STACK: ', stack)
  // remove the last node that was added (so located at the beginning) from the stack 
  console.log('RETURNED NODE: ', stack.pop())
  console.log('RETURNED NODE: ', stack.pop())
  console.log('RETURNED NODE: ', stack.pop())
  console.log('RETURNED NODE: ', stack.pop())
  
  // time complexity for insertion and removal is O(1) constant!
    // adding and removing from the BEGINNING ONLY 
      // vs. singly linked list where removing from the end means you have to iterate through entire list to get to 2nd to last node
  
  // time complexity for accessing and searching is O(n) 
    // worst case, traverse through entire stack
    // there are better DS to do this