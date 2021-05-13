// POP => removing a node from the END of DoublyLinkedList

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

    // create POP instance method
    pop() {
      // empty list
      if (!this.head) return undefined;
      // save the current tail that will be returned
      let lastNode = this.tail;
      // remove the 1 element in list so it becomes empty list
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      }
      else {
        // set new tail to be the previous node and set new tail's next to be null
        this.tail = lastNode.prev;
        this.tail.next = null;
        // sever the old tail's prev pointer
        lastNode.prev = null;
      }
      this.length--;
      return lastNode;
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new DoublyLinkedList()

// remove node from empty list
// console.log(list.pop())

// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')
console.log('STARTING LIST: ',list)
console.log('RETURNED NODE: ', list.pop())
console.log('FINAL LIST: ', list)