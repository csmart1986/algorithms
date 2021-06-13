// Given root of a binary tree, flatten the tree into a 'linked list':
  // the linked list should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null
  // the linked list should be in the same order as a PRE ORDER TRAVERSAL of the binary tree

// ORIGINAL TREE
  //      1
  //     /  \
  //    2    5
  //   / \    \
  //  3   4    6

// Flatten the L and R subtrees as linked list
  // root = 1, root.left = 2, root.right = 5, leftTail = 4
  
      //   1
      //  /  \
      // 2    5
      //  \    \
      //   3    6
      //    \ 
      //     4 

    // root.right = root.left
    // root.left = null  

// FINAL Flattened out tree
    //  1
    //   \
    //    2
    //     \
    //      3
    //       \
    //        4
    //         \
    //          5
    //           \
    //            6

// root = [1,2,5,3,4,null,6]
// output = [1, null, 2, null, 3, null, 4, null, 5, null, 6]

// root = []
// output = []

// root = [0]
// output = [0]

class TreeNode {
    constructor(value) {
      this.value = value
      this.left = null,
      this.right = null
    }
}

