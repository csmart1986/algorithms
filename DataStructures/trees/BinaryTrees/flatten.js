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


// Want a RIGHT skewed tree 
// Flatten out the L and R subtrees off of the root node (in preorder) using RECURSION
  // each subtree looks like a Linked list w/head and TAIL node
  // Result is 2 linked Lists
// Need the tail end of the L linked list to attach it to the R linked list = LEFTTAIL node
// RIGHTTAIL node = tail node of fully formed tree rooted at current node
// make recursive call for current node to return the tail node of the flattened out tree

class TreeNode {
    constructor(value) {
      this.value = value
      this.left = null,
      this.right = null
    }
  }
  
  function flatten(node) {
    // pass in root node
    // return tail node of flattened out tree
    return helper(node);
  }
  
  function helper(node) {
    // if no node
    if (node === null) return;
    // if leaf node, return node as is
    if (node.left === null && node.right === null) {
      return node;
    }
    // for a given node, recursively flatten out the L and R subtrees and store their corresponding tail
    let leftTail = helper(node.left);
    let rightTail = helper(node.right);
  
    // Re-do the connections b/t nodes (only if there is a L child for current node aka if there's a L subtree)
    if (leftTail) {
      // connect leftTail to list of nodes off of the right of root node
      leftTail.right = node.right;
      // sever connection b/t root node and right list of nodes.  Reconnect root node to the left list of nodes on the R side of root node.
      node.right = node.left;
      // want no nodes connected off the L side of root node
      node.left = null;
    };
    
    // return the tail of the final flattened out tree rooted at the current node
    if (rightTail) {
      return rightTail
    }
    else return leftTail
  }
  
  // time complexity O(n) where n is # of nodes in tree 
    // must process each node of tree exactly once
  
  // space complexity O(n) where n is number of nodes in longest branch
    // length of longest branch reflects number of nodes in the recursion stack
    // space is occupied by the callstack