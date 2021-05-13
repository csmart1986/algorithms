// REMOVE => removing a node in DoublyLinkedList by a certain position

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

    // create GET instance method
    get(idx) {
      // invalid idx
      if (idx < 0 || idx >= this.length) return null;
      let counter;
      let current;
      // position we're accessing is in 1st half of list
      if (idx <= this.length/2) {
        // set current node to the head
        current = this.head;
        counter = 0;
        while (counter < idx) {
          // traverse from front of list
          current = current.next;
          counter++;
        }
      }
      // position is in 2nd half of list
      else {
        // set current node to the tail
        current = this.tail;
        counter = this.length - 1;
        while (counter > idx) {
          // traverse backwards from end of list
          current = current.prev;
          counter--;
        }
      }
      return current;
    }

    // create REMOVE instance method
    remove(idx) {
      // invalid idx
      if (idx < 0 || idx >= this.length) return undefined;
      // remove node at beginning
      if (idx === 0) {
        return this.shift();
      }
      // remove node at end
      if (idx === this.length - 1) {
        return this.pop();
      }
   
      // remove node in middle
      // get node to remove
        let removedNode = this.get(idx);
      // get node that comes right before & after where you want to insert node
      let afterNode = removedNode.next;
      let beforeNode = removedNode.prev

      // remove connection w/prev node
      beforeNode.next = afterNode;
      removedNode.prev = null;
      // removed connection w/after node
      afterNode.prev = beforeNode;
      removedNode.next = null;
  
      this.length--;
      return removedNode;
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new DoublyLinkedList()

// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')

// set value at specific position
console.log('REMOVED NODE: ',list.remove(0))
console.log(list)
console.log('REMOVED NODE: ',list.remove(1))
// remove value at invalid position
console.log('INVALID REMOVED NODE: ',list.remove(-1))