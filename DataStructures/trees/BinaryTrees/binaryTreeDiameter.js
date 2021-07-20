// fx that takes in a Binary Tree and returns its diameter.  The diameter of a Binary tree is defined as the length of its longest path, even if that path doesn't pass through the root of the tree
  
  // a path is a collection of connected nodes in a tree, where no node is connected to more than two other nodes.  The length of a path is the number of edges between the path's first and its last node.  

  // Each BinaryTree node has an integer value, a left child, and a right child node.  Children nodes can either be BinaryTree nodes themselves or null

// tree =           1 
//                /   \
//              3       2
//            /   \
//           7     4            
//          /       \
//        8           5
//       /             \
//      9               6

// Output = 6 
  // 9 -> 8 -> 7 -> 3 -> 4 -> 5 -> 6
  // there are 6 edges between the first node and the last node of this tree's longest path



// use DFT 
  // go all the way down to a leaf before going back up branch

// for any node in tree, if node is treated as root node of its own subtree
  // consider diameter of L subtree, R subtree, and the largest path that we can create that uses the nodes we're considering

// for every node take the maximum of L subtree diameter, right subtree diameter, or whatever the maximum possible path length is that includes current root node of tree
  // max(LD, RD, path)

// need to know HEIGHT of L and R subtree
  // L height + R height = # of EDGES contained in path that goes through root node

// From every node, want to return diameter of tree rooted at that node and the height of whatever that tree is
  // Ex: node 9
    // diameter = 0, height = 1
  // Ex: node 8
    // diameter = 1, height = 2


// PSEUDOCODE
// Start at top root node, go all the way down to Leaf node and check L subtree of this node
  // The diameter and height of NULL node is 0,
  
// Check R subtree of this leaf node
  // If null node, return 0,0
  
// Now check the root node of the leaf nodes

  // take the maximum subtree diameter of the L and R subtree diameters
    // Ex: node 9
      // L subtree diameter = 0
      // R subtree diameter = 0
      // so diameter of tree rooted at 9 is 0 

  // Get the height of tree rooted at this node
    // Ex: node 9
      // height is 1

// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    
    return -1;
  }
  
  
  // time complexity O(n) where n is number of nodes in Binary Tree
    // this is the average case when the tree is balanced
  
  // Space complexity O(h) where h is the height of Binary Tree
    // this is the average case when the tree is balanced