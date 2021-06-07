// BFS of a GRAPH

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
    
    breadthFirst(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true;
      let currVertex;
  
      while (queue.length) {
        // remove 1st node from beginning of queue and add it to end of results array
        currVertex = queue.shift();
        result.push(currVertex);
        this.adjacencyList[currVertex].forEach(neighbor => {
          // if hasn't been visited, mark it as visited and add it to queue
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        })
      };
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
  
  // adds edges
  g.addEdge('A', 'B')
  g.addEdge('A', 'C')
  g.addEdge('B', 'D')
  g.addEdge('C', 'E')
  g.addEdge('D', 'E')
  g.addEdge('D', 'F')
  g.addEdge('E', 'F')
  console.log('With edges: ', g)
  
  // going left to right (whatever order the edges are in the adjacencyList, from beginning to end of list) but could go right to left
  g.breadthFirst('A') // [A B C D E F]
  
  // Recursive result [A B D E C F]