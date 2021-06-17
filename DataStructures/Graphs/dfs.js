// DFS = Explore a specific branch all the way down before exploring the next branch

// vertex = node in the graph
// edge = connection b/t vertices

// start at root node and call DFS fx on it
// whenever at a given node, add that node's name to the final array
// for every child of the given node, call the DFS function and pass in the final array
  // add the child's name to final array
// when at leaf, we're done with that branch

// given to you
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
  
    depthFirstSearch(array) {
      // add node's name to array
      array.push(this.name);
      // for every child in the children, call the DFS on the child
      for (const child of this.children) {
        child.depthFirstSearch(array);
      }
      return array;
    }
  }
  // Time complexity O(v + e) # of vertices and edges
    // we traverse every vertex and adds its name to array
    // number of edges represent # of children nodes off of a vertex
  
  // Space complexity O(v) where v is # of vertices in longest branch
    // calling dfs on all the child nodes which build up on callstack
    // the array that we are returning has v number of vertices
  