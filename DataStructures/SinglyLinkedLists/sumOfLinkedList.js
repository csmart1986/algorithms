// given 2 linked lists of potentially unequal length.  each linked list represents a non negative integer where each node in the list is a digit of that integer.  the first node in each list always represents the least significant digit of the integer.   write fx that returns head of a new linked list that represents sum of the integers represented by the 2 input linked lists.

    // must create and return a new linked list => don't modify either input lists
    // each linked list node has an integer VALUE as well as a NEXT node pointing to next node in list or to null if its the tail of list.  
    // value of each linked list node is always in range of 0 -9

    // when 1 list is null, it means empty list
    // sum could have extra carry of 1 at the end

// sample input
    // linkedListOne = 2 -> 4 -> 7 -> 1
        // 1742
    // linkedListTwo = 9 -> 4 -> 5 
        // 549

// sample output
    // 1 -> 9 -> 2 -> 2
        // 1742 + 549 = 2291


// Brute Force
    // loop through each list, pulling out individual digits to come up with the 2 numbers
    // add the 2 numbers together to get a sum
    // create a new linked list with the digits of the sum
    // time & likely space complexity O(m + n) where m is length of one list and n is length of other list


class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    // 'dummy' node that points to head of new list
    let newListHead = new LinkedList(0);
    // set current node in new list to be that dummy node
    let newListCurrNode = newListHead;
    let carry = 0;
    
    // grab current node (head) of each list
    let currNode1 = linkedListOne;
    let currNode2 = linkedListTwo;

    // as long as haven't reached end of both lists and you still have a carry value
    while (currNode1 !== null || currNode2 !== null || carry !== 0) {
        // is there still a node to get a value from?
        let val1 = currNode1 !== null ? currNode1.value : 0;
        let val2 = currNode2 !== null ? currNode2.value : 0;
        // add the 2 values created by list plus any carry value
        let sumValue = val1 + val2 + carry;
        // get the remainder that will be the value of new list node
        let newValue = sumValue % 10;
        // create new node this value
        let newNode = new LinkedList(newValue);
        // set next node after head of new list to be that new node
        newListCurrNode.next = newNode;
        // update the current node to be the last node we just created
        newListCurrNode = newNode;
        // update carry to be value to carry over to next column
        carry = Math.floor(sumValue/10);
        // Go to next node in the list assuming there is a next node
        currNode1 = currNode1 !== null ? currNode1.next : null;
        currNode2 = currNode2 !== null ? currNode2.next : null;
    }
    // return next node after 'dummy' node which is the head of new list
    return newListHead.next	
}

// time and space complexity of O(max(n,m))
    // while loop runs a number of times equal to length of longest linked list
    // our new linked list will be at least the length of the longest linked list passed to the fx