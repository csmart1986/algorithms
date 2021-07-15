// fx that takes in a Binary Tree and inverts it.  Should swap every left node in the tree for its corresponding right node.

  // Each BinaryTree node has an integer value, a left child, and a right child node.  Children nodes can either be BinaryTree nodes themselves or null

// tree =              1
//                    /  \
//                  2      3
//                /  \    /  \             
//               4    5  6    7
//             /  \
//            8    9

// output =             1 
//                    /  \
//                  3      2
//                /  \    /  \             
//               7    6  5    4
//                           /  \
//                          9    8




function invertBinaryTree(tree) {
  
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// time complexity O(n) where n is the number of nodes in the Binary Tree 
  // 

// space complexity O(d) where d is the depth (height) of the Binary Tree
  //