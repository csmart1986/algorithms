// SHIFT => removing a node from the BEGINNING of DoublyLinkedList

// define a Node class
class Node {
    constructor(val) {
      this.val = val;
      // references the next node (initially null b/c nothing that comes after it)
      this.next = null;  
      // references the previous node initially null b/c nothing comes before it)
      this.prev = null;
    }
  }
// define a DoublyLinkedList class
class DoublyLinkedList {
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
          this.tail = newNode;
        }
        // otherwise, take the current tail, add new node onto the end of it,  set prev node to be the current tail, then move the tail marker to point to the new node
        else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
        }
        // increment length by 1
        this.length++;
        // return the linked list
        return this;
    }

    // create SHIFT instance method
    shift() {
      // empty list
      if (!this.head) return undefined;
      // save the current head that will be returned
      let firstNode = this.head;
      // remove the 1 element in list so it becomes empty list
      if (this.length === 1) {
        this.head = null; 
        this.tail = null;
      }
      else {
        // set new head to be the next node, set old head's prev to null and set new head's prev to be null
        this.head = firstNode.next;
        this.head.prev = null;
        firstNode.next = null;
      }
      this.length--;
      return firstNode;
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new DoublyLinkedList()

// remove node from empty list
// console.log(list.shift())

// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')
console.log('STARTING LIST: ',list)

// remove first node
console.log('RETURNED NODE: ', list.shift())
console.log('FINAL LIST: ', list)