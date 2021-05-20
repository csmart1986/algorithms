// BREADTH FIRST SEARCH (BFS)
  // horizontal before vertical

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
    
    // BFS
    BFS() {
      // stores all nodes visited
      let data = [];
      let queue = [];
      let currNode = this.root;
  
      // place root node in queue
      queue.push(currNode);
      // while there is something in queue
      while (queue.length) {
        // remove first node in queue
        currNode = queue.shift();
        // and add it into array of visited nodes
        data.push(currNode.value);
        // if the node we just visited has a left and/or right node, add them to queue
        if (currNode.left) queue.push(currNode.left);
        if (currNode.right) queue.push(currNode.right);
      }
      return data;
    }
    
  }
  
  //          10
  //      5       13
  //    2   7   11  16
  
  let tree = new BST();
  
  // insert nodes into BST
  tree.insert(10);
  tree.insert(5)
  tree.insert(13)
  tree.insert(11)
  tree.insert(2)
  tree.insert(16)
  tree.insert(7)
  
  tree.BFS()
  