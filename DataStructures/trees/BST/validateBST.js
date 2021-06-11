// fx that takes in a potentially invalid BST and returns a boolean representing whether the BST is valid
  // valid node if: 
    // its value is strictly > than the values of every node to its left 
    // its value is stricly <= than the values of every node to its right
    // its children nodes are either valid BST nodes themselves or null

//         10
//       /    \
//      5.      15 
//     / \      /  \
//    2.  6    13.  22
//   /.         \    
//  1.           14

// Node 13 has to be less than 15 (b/c 15 is its direct parent) and greater than or equal than 10 root node
  // 10 <= Node.value < 15

// check if a node is wrapped b/t its min and max value!

// start at ROOT node
// initialize min and max value to be + and - infinity
// for each node, does the node value sit b/t our minimium and maximum value  // root always does (single node is a valid BST)
// call our fx recursively on the L and R subtree
  // pass in a different min and max value
// if reach null value (a leaf), this is valid BST

// when call method on L subtree, change MAX value to be value of current node
  // Ex: when at 10 node, change max value to be 10 (rather than + infinity)
    // so when get 5 node, check that 5 is greater than - infinity and < 10

// when call method on a R subtree, change MIN value to be value of current node
  // Ex: when at 5 node and call fx on 6 node, update MIN value to be value of current node (5)
    // so for 6 node, 5 is min value and 10 is max value

    class BST {
        constructor(value) {
          this.value = value;
          this.left = left;
          this.right = right;
        }
      }
      
      function validateBST(tree) {
        return helper(tree, -Infinity, Infinity);
      }
      
      function helper(tree, min, max) {
        // if at a leaf, its a valid BST
        if (tree === null) return true;
      
        // if node falls out of range with BST value requirements, not a valid BST
        if (tree.value < min || tree.value >= max) return false;
      
        // node to L must have MAX value of our curr node's value, min value stays the same
        let validLeft = helper(tree.left, min, tree.value);
        // node to R must have MIN value of our curr node's value, max value stays the same
        let validRight = helper(tree.right, tree.value, max);
        return validLeft && validRight;
      }
      
      
      // time complexity O(n) where n is number of nodes in tree
        // traversing every node once
        // constant time operations on each node
      
      // space complexity O(d) where d is DEPTH of the tree (depth = longest branch)
        // using space on callstack
          // call fx on all the subtrees
            // until the L and R subtree calls resolve, the root node call will stay on callstack