// UNSHIFT -> adding a node to the BEGINNING of a singly linked lis

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
        //console.log('this: ', this)
        // return the linked list
        return this;
    }
  
    // create UNSHIFT instance method
    unshift(val) {
      // create a new node
      let newNode = new Node(val);
      // if empty list, set the head and tail to be the new node
      if (!this.head) {
        this.head = newNode;
        this.tail = this.head
      }
      else {
        // set the newly created node's next property to be the current head
        newNode.next = this.head;
        // reassign the current head to be the new node
        this.head = newNode;
      }
      this.length++;
      // return the list
      return this;
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new SinglyLinkedList()
// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')

// add this value to beginning of the list
list.unshift('Hola')


console.log('final list: ', list)