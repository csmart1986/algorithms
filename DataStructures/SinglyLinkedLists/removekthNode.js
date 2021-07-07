// Fx that takes in the HEAD of a SINGLY linked list and an integer k and removes the kth node from the end of the list
  // removal should be done IN PLACE

// the input head of the linked list should remain the head of the linked list after the removal is done, even if the head is the node that's supposed to be removed
  // if the head is the node that's supposed to be removed, your function should simply mutate its value and next pointer

// fx DOES NOT need to return anything

// can assume that the input linked list will always have at least 2 nodes and , more specifically, at least k node

// head = 0 1 2 3 4 5 6 7 8 9 (input is head node with value 0)
// k = 4
// output = 0 1 2 3 4 5 7 8 9
  // 4th node form the end of list is removed (node with value 6)

// head = 0 1 2 3
// k = 4
// output = 1 2 3
  // remove the head node



// b/c it's SINGLY linked, CANT traverse to end of list and then count backwards k times and remove that node

// traverse the list with 2 pointers at different positions
  // first and second
  // both start at head of list 

// second pointer will traverse k number of nodes
  // points to the node that is k nodes ahead of node at first pointer

// move both pointers at once at same pace until 2nd pointer goes past the tail of LinkedList
  // second will point to null
  // first will point to kth node to be removed

// grab node before the kth node and have its next pointer point to the node following the kth node

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
function removeKthNodeFromEnd(head, k) {
    let first = head;
    let second = head;
    // track # of nodes traversed with second pointer
    let counter = 1;

    // move second pointer to be k nodes AHEAD of first pointer
    while (counter <= k) {
        second = second.next;
        counter+=1;
    };

    // if second pointer already pointing to NULL, first pointer is at node you want to remove and its the head node
    if (second === null) {
        // assign the head value to be the value of the node following the head
        head.value = head.next.value;
        // update head's pointer to equal the pointer of the following node.
        head.next = head.next.next;
        return;
    }

    // as long as second isn't pointing to final value in list
    while (second.next !== null) {
        // move both pointers at same pace 
        second = second.next;
        first = first.next
    }

    // first is pointing to node right BEFORE node we want to removed
    // first.next is the node we want to removed
    // overwrite first.next
    first.next = first.next.next;
}

// time complexity O(n) where n is number of nodes in linked list
// second pointer traverses all the nodes

// space complexity O(1)