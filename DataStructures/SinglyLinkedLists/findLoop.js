// fx that takes in HEAD of linked list that contains a LOOP (the list's tail node points to some node in the list instead of null).  Returns the node from which the loop originates in constant space.
// each LinkedList node has an integer value as well as next node pointing to next node in list.  

// singly or doubly linked list?  singly
// what are the values of nodes? postive integers
// are the values sorted? no
// can there be no loop? no
// can there be duplicate values? yes


// brute force - loop over element and store each node value in a hash table.  when come across node with value already in hash table, it means we've already visited it and its the first node in loop
  // NOT CONSTANT SPACE (n nodes in hash table)

// edge case - node loops back on itself (ex. node with value 9's next value is 9)
  // 0->1->2->3->4->5->6->7->8->9<-

// Ex:
// head node with value 0
// head =  0->1->2->3->4->5->6
//                     ^     |
//                     |     V
//                     9<-8<-7

// OUTPUT: node with value 4
//                     4->5->6
//                     ^     |
//                     |     V
//                     9<-8<-7

// Find the total distance of the list
    // Find the distances b/t:
        // head and origin of loop (D)
        // origin of loop and point where pointers overlap (P)
        // point were pointers overlap and loop origin (remainder distance)
// slow pointer travels distance of D + P to get to overlap point
// fast pointer travels at twice the distance in same amount of time to get to overlap point-> 2D + 2P
// Remainder = total distance - D - P
    // plug in the values to get  remainder
    // remainder distance ends up being the same distance as D distance

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function findLoop(head) {
    // need 2 pointers to traverse list 
        // slow loops through every single node, fast loops through every other node
    let fast = head.next.next;
    let slow = head.next;
    // while pointers haven't overlapped
    while (fast !== slow) {
      // advance the nodes
      fast = fast.next.next;
      slow = slow.next;
    }
    // cover the remainder distance from where pointers are overlapped and the origin of loop
    // put either pointer back at head of list, but keep the other pointer at site of overlap
    slow = head;
    // while pointers haven't overlapped at origin of loop
    while (fast !== slow) {
      slow = slow.next;
      // move fast pointer at same pace as slow pointer so amount of distance travelled is equal
      fast = fast.next;
    }
    // both nodes are now at origin of loop
    return slow;
  }
  
  // space complexity O(1) and time complexity is O(n)
    // the fast pointer doesn't affect time complexity
    // the slow pointer traverses n number of nodes