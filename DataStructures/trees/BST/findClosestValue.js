// fx that takes in a BINARY SEARCH TREE and a target integer value and returns the closest value to that target value contained in the BST
  // can assume that there will only be one closest node


// tree =      10
//           /    \
//         5        15
//       /   \    /    \   
//      2    5    13   22
//     /            \
//    1              14

// target = 12
// return 13

// initialize a variable to keep track of CLOSEST value in BST, update as needed

// start at root node 

// compute the ABSOLUTE DIFFERENCE b/t CURRENT value and target value
  // abs(current - target)
  // is this difference smaller than absolute difference b/t CLOSEST value and target value?
  // update CLOSEST value depending on which is smaller
  // if the difference is equal, you have found exact match to target value, return CLOSEST value

// compare current node's value to target value
  // if equal, return the node value
  // if value > target value, 
    // need to check L subtree
    // every value in R subtree is farther away from target value than current value
  // if value < target value,
    // need to check R subtree

// check if the L or R child of current node exists
  // if it doesn't, return CLOSEST value

// if the L or R child does exist, 
  // compare its value to the target value and follow above steps

// RECURSIVE
function findClosestValueInBst(tree, target) {
    return helper(tree, target, tree.value)
  }
  
  function helper(tree, target, closest) {
    // base case - reached a leaf
    if (tree === null) return closest;
    // reassign closest to be smallest absolute difference as needed
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value
    }
    // explore L subtree
    if (target < tree.value) {
      return helper(tree.left, target, closest)
    }
    // explore R subtree
    else if (target > tree.value) {
      return helper(tree.right, target, closest)
    }
    // values are equal => found the target
    else return closest;
  }
  
  // RECURSIVE VERSION
    // WORSE CASE, time complexity is O(n) n is # of nodes in the tree
      // tree that has only 1 branch and can't eliminate half the tree at each node
    // ON AVERAGE, time complexity is O(log n) where n is # of nodes in the tree
    // eliminating half the tree every time we explore the node
  
    // ON AVERAGE, space complexity is O(log n) where n is # of nodes in the tree
      // making multiple recursive calls that add up on callstack but able to eliminate half the nodes
    // WORSE CASE, space complexity is O(n) where n is # of nodes in the tree
      // tree that has only 1 branch, and callstack at end of branch consists of a recursive call for each node in the branch
  
  // ITERATIVE
  function findClosestValueInBst(tree, target) {
    return helper(tree, target, tree.value)
  }
  
  function helper(tree, target, closest) {
    // keep track of current node we're processing
    let currNode = tree;
    // as long as not at a leaf
    while (currNode !== null) {
      // reassign closest to be smallest absolute difference as needed
      if (Math.abs(target - closest) > Math.abs(target - currNode.value)) {
        closest = currNode.value
      }
      // explore L subtree
      if (target < currNode.value) {
        currNode = currNode.left;
      }
      // explore R subtree
      else if (target > currNode.value) {
        currNode = currNode.right;
      }
      // values are equal => found the target
      else break
      }
    return closest;
  }
  
  // ITERATIVE VERSION
    // space complexity is O(1) on avg and in worse case!
      // only storing currNode and closest
    // time complexity O(log n) on average and O(n) worst case 
      // same reasons as recursive version