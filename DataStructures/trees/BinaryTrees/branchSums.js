// fx that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branchsum 
  // branch sum = sum of all values in a binary tree branch
  // binary tree branch = path of nodes in a tree that starts at the root node and ends at any leaf node
  
  //
  //            1
  //           / \
  //          2   3
  //         /\   / \
  //       4   5 6   7
  //     / \  /
  //    8  9 10

  // [15,16,18,10,11]

// DFS search -> L branch before R branch

// call RECURSIVE fx on each node in tree that calculates branch sum for the tree rooted at that node

// keep track of RUNNING SUM
  // sum obtained by adding values of nodes above us at every recursive call

// Start at ROOT node
  // runningSum = 0;
  // has L and R children node

// call fx on each child node passing in value of runningSum 
  // runningSum += curr node value => 0 + 1 = 1

// at both of these nodes, there are still children nodes
  // call fx on each child node passing in new value of runningSum
    // L node 2: runningSum += curr node value => 1 + 2 = 3
    // R node 3: runningSum += curr node value => 1 + 3 = 4
  // so L nodes 4 and 5's running sum is 3
  // R nodes 6 and 7's running sum is 4

// When reach LEAF nodes, recalculate runningSum and add it to list of sums that we return at end


class BinaryTree {
    constructor(value) {
      this.value = value,
      this.left = null,
      this.right = null
    }
  }
  
  function branchSums(root) {
    const sumsArr = [];
    // runningSum starts at 0 at the root
    helper(root, 0, sumsArr);
    return sumsArr;
  }
  
  // calculates the branch sum
  function helper(node, runningSum, sumsArr) {
    // if at node with only 1 child, don't want to call node.value on nonexistant node
    if (node === null) return
  
    let newSum = runningSum + node.value;
    // if at leaf node (no children), add branch sum to sums list
    if (node.left === null && node.right === null) {
      sumsArr.push(newVal);
      return;
    }
    // not a leaf node so keep traversing down tree
    helper(node.left, newSum, sumsArr);
    helper(node.right, newSum, sumsArr);
  }
  
  // time complexity is O(n) where n is total # of nodes in binary tree
    // must traverse through all nodes
    // doing constant time operations at each node
  
  // space complexity is O(n)
    // multiple recursive fx calls on callstack at once
      // if balanced branches, O(log n)
        // you eliminate half the nodes in remaining tree at every recursive call
      // if a single long unbalanced branch, O(n)
        // n recursive calls on stack at once b/c have to go to leaf node before start removing calls from the stack
  
    // how many branch sums do you have?
      // **never will have more than n branch sums b/c you have n nodes!
      // if balanced, # of leaf nodes is roughly half of total number of nodes => O(n/2) => O(n)
      // whenever you add a new level of leaf nodes, you're multiplying total # of nodes by 2