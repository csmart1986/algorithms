// fx that takes in a BINARY TREE and returns the SUM of its nodes' DEPTHS
  // node depth = distance b/t a node in a Binary tree and the tree's root

// each BinaryTree NODE has an integer VALUE, a LEFT child node, and a RIGHT child node.
// children nodes can either be a BinaryTree node themselves or null



// **any node in the binary tree has to get its depth given to it by its PARENT**
  // child node is always 1 level deeper that its parent's depth

// RECURSIVE APPROACH
  // whenever call recursive fx on a particular node, we're gonna return the sum of the node that we're currently at PLUS the return values of calls to the recursive fx on the 2 children nodes of particular node
  // BASE case is when reach leaf node
 
function nodeDepths(root, depth = 0) {
    // base case - if current node is ever null, add 0 to total sum
    if (root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// time complexity is O(n) where n is total number of nodes in tree
// must process the depth of each node to get final sum of depths

// space complexity is O(h) where h is the height of binary tree
// recursive calls are made all the way down a branch so max number of calls on callstack is the height of binary tree (aka depth of deepest node in tree)

  
  
// ITERATIVE APPROACH
// will use a STACK
// initially, add root node to top of STACK
// also store the node's depth (root = 0 depth)
// so long as stack isn't empty, pop node off the stack and apply algorithm to this node
    // make sure value isnt null
// keep track of running sum of depths
    // add that node's depth to running sum
// push the current node's children nodes onto top of stack
// also give the children nodes their depth which is parent node's depth + 1
  
  
function nodeDepths(root) {
    let sumOfDepths = 0;
    // store NODE and DEPTH of node in object, then put object in a STACK
    let stack = [ { node: root, depth: 0 } ]; 

    while (stack.length > 0) {
        // pop the last node object off the top of stack
        let currNodeInfo = stack.pop();
        let node = currNodeInfo['node'];
        let depth = currNodeInfo['depth'];
        // will add null values onto stack
        if (node === null) {
        continue
        }
        // add current node's depth to total sum
        sumOfDepths += depth;
        // add the current node's children onto top of stack & pass down their parents depth plus 1 to get the children nodes depth
        stack.push({ node: node.left, depth: depth + 1})
        stack.push({ node: node.right, depth: depth + 1})
    }
    return sumOfDepths;
}
  
// time complexity is O(n) where n is total number of nodes in tree
// must process the depth of each node to get final sum of depths

// space complexity is O(h) where h is the height of binary tree
// where max number of nodes in STACK is rougly similiar to height of binary tree