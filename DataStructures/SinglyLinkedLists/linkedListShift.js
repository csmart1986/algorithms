// SHIFT -> Removing a node from BEGINNING of a singly linked lis

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
}
  
// initially, when we make a new list instance, it is empty
let list = new SinglyLinkedList()
// add on this value to end of the list
list.push('HELLO')
list.push('GOODBYE')
list.push('!')


let item1 = list.shift()
console.log('first head removed: ', item1)

let item2 = list.shift()
console.log('second head removed ', item2)

let item3 = list.shift()
console.log('second head removed ', item3)

console.log('final list: ', list)