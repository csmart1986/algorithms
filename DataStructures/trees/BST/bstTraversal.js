// write 3 fxs that take in a BST and an empty array, traverse the BST, add its nodes' values to the input array, and return that array.
  // use IN order, PRE order, and POST order traversal

// Each BST node has an integer VALUE, a LEFT child node, a RIGHT child node

// Node satisfies BST property if its VALUE is strictly > values of every node to its LEFT and its value is <= to values of every node to its RIGHT

// IN ORDER => Traversing L nodes, current node, R nodes
// PRE ORDER => Traversing current node, L nodes, R nodes
// POST ORDER => Traversing L nodes, R nodes, current node

function preOrderTraverse(tree, array) {
    if (tree !== null) {
      array.push(tree.value);
      preOrderTraverse(tree.left, array);
      preOrderTraverse(tree.right, array);
    }
    return array;
  }
  
  function inOrderTraverse(tree, array) {
    if (tree !== null) {
      inOrderTraverse(tree.left, array);
      array.push(tree.value);
      inOrderTraverse(tree.right, array);
    }
    return array;
  }
  
  function postOrderTraverse(tree, array) {
    if (tree !== null) {
      postOrderTraverse(tree.left, array);
      postOrderTraverse(tree.right, array);
      array.push(tree.value);
    }
    return array;
  }
  
  // time complexity O(n) where n is number of nodes in tree
  
  // space complexity O(n) where n is number of nodes in tree or O(d) where d is depth or height of BST (longest branch)
    // creating an array of length n
    // total # of calls on the callstack is equal to longest branch of BST