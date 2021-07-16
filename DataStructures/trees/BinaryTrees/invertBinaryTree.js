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



// ITERATIVE Solution with BFS (breadth first search)
  // initialize a Queue and traverse level by level
  // So long as queue is NOT empty, con't traversal
  // Swap every node's child nodes every time we explore

// Add the root node to Queue

// Pop out node at the beginning of queue

// Swap that node's children nodes
  // swap L with R node

// Add to queue both of the children nodes of Root node to the queue
  // now we are done with root node

// Pop 1st node out of queue and repeat the process

// When reach null nodes as children nodes, can still swap them and add them to queue

// if get to null node in queue, just skip it


function invertBinaryTree(tree) {
  // initially holds the root node
  const queue = [tree];
  // as long as there's a node in the queue
  while (queue.length !== 0) {
    // remove 1st node in queue and assign it to currNode
    let currNode = queue.shift();
    // if reach leaf node, there's nothing to swap
    if (currNode === null) {
      continue;
    }
    // swap current node's children nodes
    swapLeftAndRight(currNode);
    queue.push(currNode.left);
    queue.push(currNode.right);
  }
}

function swapLeftAndRight(tree) {
  const temp = tree.left
  tree.left = tree.right;
  tree.right = temp;
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
  // explore every single node once
  // swapping and adding nodes to queue is constant time

// space complexity O(n)
  // queue will hold every single leaf node at some point
  // # of leaf nodes in binary tree is around n/2 => n



// RECURSIVE Solution

// start at root node and swap its L and R children nodes

// make recursive call 
  // do the exact same thing on the L child node
    // swap L child node's children

// after finishing the L subtree, move on to R subtree

// make recursive call 
  // do the exact same thing on the R child node
    // swap R child node's children


function invertBinaryTree(tree) {
  // BASE CASE: if node is null
  if (tree === null) {
    return;
  }
  // swap its chldren nodes and then invert each of them
  swapLeftAndRight(tree);
  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
  const temp = tree.left
  tree.left = tree.right;
  tree.right = temp;
}

// time complexity O(n) where n is the number of nodes in the Binary Tree 
  // explore every single node once
  // swapping and calling recursive fx are constant time

// space complexity O(d) where d is the depth of tree
  // max # of calls on callstack is equal to d