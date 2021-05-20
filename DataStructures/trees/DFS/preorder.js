// DEPTH FIRST SEARCH (DFS) - PRE ORDER
  // vist root node first, then traverse entire left side, then entire right side

  class Node {
    constructor(val) {
      this.value = val;
      this.left = null;
      this.right = null;
    };
  };
    
  class BST {
    constructor() {
      this.root = null;
    };
    
    // INSERT instance method
    insert(value) {
      // create new node
      let newNode = new Node(value);
      
      // if there's no root, make the new node the root 
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      
      else {
        // current node starts as the root node
        let currNode = this.root;
        
        // if insert a node, break out of loop
        while (true) {
          // if come across node with the same value as node you're inserting
          if (value === currNode.value) return undefined
          
          // if value that you're inserting is < current node's value, go LEFT
          if (value < currNode.value) {
            // if there's no node to the left, insert node there
            if (currNode.left === null) {
              currNode.left = newNode;
              return this;
            }
            // if there is a node to left, move to that node
            else {
              currNode = currNode.left
            }
          }
          // if value that you're inserting is > current node's value, go RIGHT
          else if (value > currNode.value) {
            // if there's no node to the right, insert node there
            if (currNode.right === null) {
              currNode.right = newNode;
              return this;
            }
            // if there is a node to left, move to that node
            else {
              currNode = currNode.right;
            }
          }
        }
      }
    };
    
    // DFS - PREORDER
    preOrder() {
      // stores all nodes visited
      debugger
      let data = [];
  
      // define helper fx
      function traverse(node) {
        // add visited node to data
        data.push(node.value);
        // if theres a node to left or right of current node?
        if (node.left) traverse(node.left);
        // only after traversing entire left, do you traverse the entire right
        if (node.right) traverse(node.right);
      }
  
      // invoke helper fx on root node
      traverse(this.root)
      return data;
    }
  }
  
  //          10
  //      6       15
  //    3   8       20
  
  let tree = new BST();
  
  // insert nodes into BST
  tree.insert(10);
  tree.insert(6)
  tree.insert(15)
  // tree.insert(3)
  // tree.insert(8)
  // tree.insert(20)
  
  tree.preOrder()
  