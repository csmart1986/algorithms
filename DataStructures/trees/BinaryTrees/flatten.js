// Given root of a binary tree, flatten the tree into a 'linked list':
  // the linked list should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null
  // the linked list should be in the same order as a PRE ORDER TRAVERSAL of the binary tree

  //      1
  //     /  \
  //    2    5
  //   / \    \
  //  3   4    6

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
  
  function flatten(node) {
    return helper(node);
  }
  
  function helper(node) {
    // if no node
    if (node === null) return;
    // if leaf node
    if (node.left === null && node.right === null) {
      return node;
    }
    let leftTail = helper(node.left);
    let rightTail = helper(node.right);
  
    if (leftTail) {
      leftTail.right = node.right;
      node.right = node.left;
      node.left = null;
    };
    
    if (rightTail) {
      return rightTail
    }
    else return leftTail
  }
  
  