// REMOVE-> removing a node from a singly linked list at a specific POSITION

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
    
    // create SHIFT instance method
    shift(val) {
      // check if there are no nodes
      if (!this.head) return undefined;
      
      // store current head in a variable that will return at end
      let currentHead = this.head;
      // move the head over to be current head's next node
      this.head = currentHead.next;
      // decrement length by 1
      this.length--;
      // when list length reaches 0, this.head will be null but this.tail won't be - need to set it to null
      if(this.length === 0) {
        this.tail.null;
      }
      // return the removed head
      return currentHead;
    }

    // create GET instance method
    get(goalIdx) {
      if (goalIdx < 0 || goalIdx >= this.length) return null;
      // node at the current position, start at the head of list
      let current = this.head;
      // current position
      let position = 0;
      // traverse the list as long you haven't reached goalIdx
      while (position !== goalIdx) {
        // set current node and position to be the next node in the list
        current = current.next;
        position++;
      }
      return current;
    }
   
    // create REMOVE instance method
    remove(idx) {
      if (idx < 0 || idx >= this.length) return undefined;
      // remove 1st item
      if (idx === 0) return this.shift();
      // remove last item
      if (idx === this.length - 1) return this.pop();

      // remove item in MIDDLE
      // get node one before the node we are going to remove;
      let prev = this.get(idx - 1);
      // store node we're going to removed
      let removed = prev.next;
      // set the previous node's next value to the next node after the removed node 
        // this disconnects the two nodes
      prev.next = removed.next;
      this.length--;
      return removed;
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new SinglyLinkedList()
// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')

// remove from BEGINNING of list
// console.log('list1: ', list)
// list.remove(0)
// console.log('list2: ', list)

// remove from END of list
// console.log('list1: ', list)
// list.remove(2)
// console.log('list2: ', list)

// remove from MIDDLE of list
console.log('LIST1: ', list,'\n')
console.log('REMOVED NODE: ', list.remove(1), '\n')
console.log('LIST 2: ', list, '\n')

// try to remove node not in the list
console.log('REMOVED NODE: ',list.remove(10))