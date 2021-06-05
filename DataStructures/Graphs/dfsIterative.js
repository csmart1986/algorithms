// DFS ITERATIVE of a GRAPH

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
    
    depthFirstIterative(start) {
      const result = [];
      // make stack to keep track of vertices
      const stack = [start];
      // store visited vertices
      const visited = {};
      // add starting vertex to stack and mark as visited
      visited[start] = true;
  
      let currVertex;
      
      while (stack.length) {
        // grab item in stack that was added last & add to results array
        currVertex = stack.pop();
        result.push(currVertex);
        // check all its neighbors
        this.adjacencyList[currVertex].forEach(neighbor => {
          // if neighbor hasn't been visited, then visit it
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        });
      }
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
  
  
  g.depthFirstIterative('A') // [A C E F D B]
  
  // Recursive result [A B D E C F]