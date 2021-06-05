// DFS RECURSIVE of a GRAPH

// Graph class
class Graph {
    constructor() {
      this.adjacencyList = {} 
    }
    
    // pass a vertex name
    addVertex(vertex) {
      // if vertex isn't already in adjacencyList, add it and set value to empty array
      if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
  
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);  // if DIRECTED GRAPH, wouldn't include this line
        // didn't include error handling like to make sure valid v1 or v2
    }
    
    depthFirstRecursive(start) {
      const result = [];
      const visited = {};
      // preserve meaning of 'this' outside of helper fx to be graph itself
      const adjacencyList = this.adjacencyList;
      
      // helper fx
      (function dfs(vertex) {
        // if no vertex...
        if (!vertex) return null;
        // mark vertex as visited by placing vertex into visited object
        visited[vertex] = true;
        // add vertex to results array
        result.push(vertex);
        // for each neighbor, check if it has already been visited
        adjacencyList[vertex].forEach(neighbor => {
          // hasn't been visited...
          if (!visited[neighbor]) {
            // recursive call on that neighbor
            return dfs(neighbor)
          }
        });
      })(start);
      return result;
    }
  };
  
  let g = new Graph()
  // adds vertices
  g.addVertex('A')
  g.addVertex('B')
  g.addVertex('C')
  g.addVertex('D')
  g.addVertex('E')
  g.addVertex('F')
  console.log('No edges: ', g)
  
  //add edges
  g.addEdge('A', 'B')
  g.addEdge('A', 'C')
  g.addEdge('B', 'D')
  g.addEdge('C', 'E')
  g.addEdge('D', 'E')
  g.addEdge('D', 'F')
  g.addEdge('E', 'F')
  console.log('With edges: ', g)
  
  
  g.depthFirstRecursive('A')