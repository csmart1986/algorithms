// REVERSE > reverse the linked list IN PLACE

// define a Node class
class Node {
    constructor(val) {
      this.val = val;
      // references the next node (initially null b/c nothing that comes after it)
      this.next = null;  
    }
  }
// define a SinglyLinkedList class
class SinglyLinkedList {
    constructor() {
        this.length = 0,
        this.head = null,
        this.tail = null
    }

    // create PUSH instance method
    push(val) {
        // create a new node instance where the value of the node is what is being passed to push method
        let newNode = new Node(val);
  
        // if it's an empty list, set the head & tail to be the newly created node
        if (!this.head) {
          this.head = newNode;
          this.tail = this.head;
        }
        // otherwise, take the current tail, add new node onto the end of it, then move the tail marker to point to the new node
        else {
          this.tail.next = newNode;
          this.tail = newNode;
        }
        // increment length by 1
        this.length++;
        // return the linked list
        return this;
    }
    
    // creates REVERSE instance method
    reverse() {
      // create a temp variable for current node
      let currNode = this.head;
      let nextNode;
      // starts null b/c there's initially no node in front of currNode
      let prevNode = null;
      
      // swap head and tail
      this.head = this.tail;
      this.tail =  currNode;
      
      for (let i = 0; i < this.length; i++) {
        // set next to be the value of the next node after current node
        nextNode = currNode.next;
        // set the next property of current node to be previous node (first iteration it's null)
          // connecting current node with previous node through next pointer (different from nextNode!)
        currNode.next = prevNode;
        // reassign previous node to be the current node
        prevNode = currNode; 
        // reassign current node to be the next node
        currNode = nextNode;
      }
      return this;
    }
    
    // creates PRINT instance method => prints all the values of the list in an array form to help visualize
    print() {
      let arr = [];
      let current = this.head;
      while (current) {
        arr.push(current.val);
        current = current.next
      }
      console.log(arr);
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new SinglyLinkedList()
// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')

list.print()
list.reverse()
list.print()