// DEPTH FIRST SEARCH (DFS) - IN ORDER
  // traverse all the way to LEFT, then push value of node in, then traverse RIGHT side
  

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
    
    // DFS - IN ORDER
    inOrder() {
      // stores all nodes visited
      let data = [];
  
      // define helper fx
      function traverse(node) {
        // traverse all the way to left
        if (node.left) traverse(node.left);
        // then add visited node to data
        data.push(node.value);
        // then traverse right
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
  tree.insert(3)
  tree.insert(8)
  tree.insert(20)
  
  tree.inOrder()