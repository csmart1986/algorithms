// POP -> Removing a node from END of a singly linked list

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
        console.log('this: ', this)
        // return the linked list
        return this;
    }
  
    // create POP instance method
    pop(val) {
      // check if there are no nodes
      if (!this.head) return undefined;
      
      // both start at beginning
      let current = this.head;
      let newTail = current

      // while there is still a node to move current to
      while (current.next) {
        // new tail is set to whatever node current was
        newTail = current;
        // move current 1 node forward
        current = current.next;
      }

      // set tail to be the new tail
      this.tail = newTail;
      // set the new tail's next node to be null (nothing comes after it and connection to old tail has been severed)
      this.tail.next = null
      // decrement length by 1
      this.length--;

      // if list is now empty, then reset head and tail to be null
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }

      // if do .pop() on empty list, the returned item will undefined, head & tail are null, and length === 0
      return current;
    }
  }
  
  // initially, when we make a new list instance, it is empty
  let list = new SinglyLinkedList()
  // add on this value to end of the list
  list.push('HELLO')
  list.push('GOODBYE')
  list.push('!')
  // remove last value in the list
  list.pop()
  list.pop()
  let item = list.pop()
  
  console.log('item: ', item)
  console.log('list: ', list)