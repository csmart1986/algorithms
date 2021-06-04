// create an UNDIRECTED Graph

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
  
    removeEdge(vertex1, vertex2) {
        // take current adjacencyList of vertex1, and only keep vertices in list that aren't equal to vertex2
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          v => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          v => v !== vertex1
        );
        // didn't include error handling like to make sure valid v1 or v2
    }
  
    removeVertex(vertex) {
      // as long as length isn't 0
      while (this.adjacencyList[vertex].length) {
        // remove values inside adjacencyList of vertex
        const adjacentVertex = this.adjacencyList[vertex].pop();
        // remove edge between vertex and the vertex just popped off
        this.removeEdge(vertex, adjacentVertex);  // UNDIRECTED so order doesn't matter
      }
      // delete the entire adjacencyList of the vertex
      delete this.adjacencyList[vertex];
    }
  };
  
  let g = new Graph()
  // adds vertices
  g.addVertex('Dallas')
  g.addVertex('Tokyo')
  g.addVertex('Aspen')
  g.addVertex('Los Angeles')
  g.addVertex('Hong Kong')
  console.log('No edges: ', g)
  
  //add edges
  g.addEdge('Dallas', 'Tokyo')
  g.addEdge('Dallas', 'Aspen')
  g.addEdge('Hong Kong', 'Tokyo')
  g.addEdge('Hong Kong', 'Dallas')
  g.addEdge('Dallas', 'Aspen')
  g.addEdge('Los Angeles', 'Hong Kong')
  g.addEdge('Los Angeles', 'Aspen')
  console.log('With edges: ', g)
  
  // remove edges
  // g.removeEdge('Dallas', 'Aspen')
  // console.log('after removing edge: ', g)
  
  // remove vertex
  g.removeVertex('Hong Kong')
  console.log('final: ', g)