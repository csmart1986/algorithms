// Given a Node class that has a name and an array of optional children nodes

// Implement BFS on the Node class which takes an empty array, traverses the tree using BFS approach (specifically navigating the tree from L to R), stores all of the nodes' names in the input array, and returns it.  

// traverse graph level by level starting at the top


// use a QUEUE
  // First in, First // given to you

// Create variable currNode
// Start at ROOT node and add it to the QUEUE
// use WHILE loop
  // while there are nodes in QUEUE, pop out the node in FIFO fashion
  // make that node the currNode
// Add that node's NAME to the final array
// Add all the CHILDREN nodes of that currNode to the back of QUEUE in L to R order
// Check if QUEUE is empty...
  // if not, take out the first node that was added to queue
    // make it currNode
    // add its NAME to final array
    // add all of it CHILDREN nodes to QUEUE
// If QUEUE is empty, break out of while loop and return final array 


class Node {
    constructor(name) {
      this.name = name,
      this.children = [];
    }
    // given to you
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
    bfs(array) {
      // initialize queue w/root node
      let queue = [this];

      while(queue.length > 0) {
        // pop out the first node in the queue (FIFO)
        let currNode = queue.shift();
        array.push(currNode.name);
        for (const child of currNode.children) {
          // add each child to the back of the queue
          queue.push(child);
        }
      }
      return array;
    }
}

// time complexity O(v + e) where v is # of vertices/nodes and e is # of edges
  // traverse every node 
  // for every node we add its children nodes to the queue 
    // # of children = number of edges coming out of node

// space complexity O(v) 
  // storing array of v node names
  // Queue can hold up to v nodes 
    // if children are all direct children of a node