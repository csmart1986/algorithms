// fx that takes in head of linked list whose nodes are in sorted order w/respect to their values.  It returns a version of the linked list that doesn't contain any nodes with duplicate values.  The returned linked list should still have its nodes sorted with respect to their values.

  // is it singly or doubly linked list?  singly
  // should linked list be modified in place or return a new list?  modified in place
  // takes in the list or the head of the list?  the head (which give access to rest of the list)
  // what's the node value type?  + or - integers
  // sorted how? in ascending order

// Ex: linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4
// 1 -> 3 -> 4

// Brute force 
  // use hash table to keep track of all node values that are found in list while traversing and then remove the nodes that have value that already exists in hash table

// define a singly linked list class which is made up of nodes  
  // each node has a value and a next node pointer pointing to next node or null (if its the tail node)
  class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
    
  function removeDuplicatesFromLinkedList(headOfList) {
    // grab 1st node in list
    let currentNode = headOfList;
    // as long as you haven't reached end of list...
    while(currentNode !== null) {
      // grab the node that comes after current node
      let nextNode = currentNode.next;
      // as long as the node that comes after current node isn't null and it has a value equal to current node's value (is a duplicate)...
      while (nextNode !== null && nextNode.value === currentNode.value) {
        // remove the node w/duplicate value by reassigning it to the next node that comes after it
        nextNode = nextNode.next;
      }
      // if find node value not equal to current node value...
      // keep the node that comes after current node the same
      currentNode.next = nextNode;
      // move current node to be the next node
      currentNode = nextNode;
    }	
    // return the modified list
    return headOfList;
  }
  
  // time complexity O(n) and space complexity O(1) where n is length of list (number of nodes)
  