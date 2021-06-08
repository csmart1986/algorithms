// Fx that takes in head of singly linked list, reverses list IN PLACE, and returns its new head

// each LinkedList node has integer values as well as next node pointing to next node in list or null if its the tail.


// need 3 pointers at any given time (update all 3 pointers by shifting values to the right)
  // Order of overriding pointers matters!!
  // currNode, prev, and temp pointers

// as long as currNode isn't at the end of list (is NULL), keep reversing
  // temp = currNode.next; (grab node right after currNode)
  // currNode.next = prev; (reverse the next arrow to point backwards)
    // initially, prev is null (tail is pointing to nothing)
  // prev = currNode (reassign prev to be currNode)
  // currNode = temp (make currNode the next node aka temp)
    // currNode.next isn't pointing to that node anymore, it's pointing to prev so can't use currNode.next
  // repeat steps
// return prev which is the new head of the linked list

function reverseLinkedList(head) {
  let prev = null;
  let currNode = head;
  // if assign temp outside of while loop, would have to add add'l code in loop: temp = temp.next 
    // when currNode is tail, temp is null 
    // can't do temp = null.next
    // so would need add'l code to handle this

  while (currNode !== null) {
    let temp = currNode.next;
    // as soon as we override currNode.next, we no longer have access to it so save it as temp first
    currNode.next = prev;
    // as soon as we override prev, we no longer have access to it so save it as currNode.next first
    prev = currNode;
    // as soon as we override currNode, we no longer have access to it so save it as prev first
    currNode = temp;
  }
  return prev;
}


// time complexity O(n) where n is length of list 
// space complexity O(1)
  // storing 3 variables is constant space
  // in place list