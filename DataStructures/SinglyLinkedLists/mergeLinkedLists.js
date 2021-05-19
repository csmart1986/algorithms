// function that takes in the HEADS of TWO SINGLY Linked Lists that are in SORTED order, respectively. The function should merge the lists IN PLACE (i.e., it shouldn't create a brand new list) and return the HEAD of the merged list; the merged list should be in sorted order.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to null if it's the tail of the list.

// headOne = 2 -> 6 -> 7 -> 8 
    // the head node with value 2
// headTwo = 1 -> 3 -> 4 -> 5 -> 9 -> 10 
    // the head node with value 1
// mergeLinkedLists(headOne, headTwo) = 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 
    // the new head node with value 1
    

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

function mergeLinkedLists(headOne, headTwo) {
 
    // grab 1st node in each list 
    let currNode1 = headOne;
    let currNode2 = headTwo;
    // intially the previous node of list1 is null
    let prevNode1 = null;
  
    // while there are still nodes in BOTH lists
    while (currNode1 !== null && currNode2 !== null) {
      
      if (currNode1.value < currNode2.value) {
          // don't need to put currNode2 in list1, just advance prev and current node pointers in list1
          prevNode1 = currNode1;
          currNode1 = currNode1.next;
      }
      // need to put currNode2 in list1 before currNode1
      else {
          // prevNode1 should no longer point to currNode1, it should point to currNode2 instead
          // if prevNode1 is not null (initially it is!)
          if (prevNode1 !== null) {
              prevNode1.next = currNode2;
          }    
          // assign prevNode to be first node in list2
          prevNode1 = currNode2;
          // make the node that comes after first node in list2 the new current node
              // don't want to lose the head of the remaining list2
          currNode2 = currNode2.next;
          // make connection from first node (prevNode1) in list2 with current node in list1
          prevNode1.next = currNode1;            
      }
    }
    // if run out of values in list1, prevNode1 is last node in list1
      // its next value points to currNode2 and all of its following node that make up list2
    if (currNode1 === null) {
        prevNode1.next = currNode2;
    }
    // if run out of values in list2, then don't need to do anything
      // remaining nodes in list1 are already in order
  
    // return head of merged list
      // depends on which head value was smaller
    return headOne.value < headTwo.value ? headOne : headTwo
  }

// time complexity O(n + m) where n is number of nodes in first linked list and m is number of nodes in second linked list
    // iterating over each value in each list once

// space complexity O(1)
    // mutating our linked list with existing linked lists nodes -> not creating a new list or using space that grows with respect to length of inputs

  