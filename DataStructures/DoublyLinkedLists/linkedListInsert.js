// INSERT => adding a node in DoublyLinkedList by a certain position

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

     // create UNSHIFT instance method
    unshift(val) {
      // create new node that you're adding
      let newNode = new Node(val);
      // if empty list, set head and tail to be new node 
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      }
      else {
        // set new head to be the next node, set old head's prev to null and (new head's prev is already set to null per Node class)
        this.head.prev = newNode;
        newNode.next = this.head;
        // set current head to new node
        this.head = newNode;
      }
      this.length++;
      return this;
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

    // create INSERT instance method
    insert(idx, val) {
      // invalid idx
      if (idx < 0 || idx >= this.length) return false;
      // insert new node at beginning
      if (idx === 0) {
        this.unshift(val);
        return true;
      }
      // insert new node at end
      if (idx === this.length) {
        this.push(val);
        return true;
      }

      // insert node in middle
      // create node that will be inserted
      let newNode = new Node(val);
      // get node that comes right before where you want to insert node
      let prevNode = this.get(idx - 1);
      // get node that comes right after where you want to insert node
      let afterNode = prevNode.next;

      // connect new node with prev node
      prevNode.next = newNode;
      newNode.prev = prevNode;
      // connect new node w/after node
      newNode.next = afterNode;
      afterNode.prev = newNode;
      
      this.length++;
      return true;
    }
}
  
// initially, when we make a new list instance, it is empty
let list = new DoublyLinkedList()

// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')

// set value at specific position
console.log(list.insert(1,'HOLA'))
console.log(list)
// set value at invalid position
//console.log(list.insert(-1,'HOLA'))
console.log(list.insert(8, 'HOLA'))
