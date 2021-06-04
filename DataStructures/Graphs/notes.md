v = number of vertices
e = number of edges

Space complexity
- Adjacency List -> O(v + e)
    - less space!

- Adjacenty Matrix -> O(v**2)
    - nested structure, adding a new vertex means adding a new row AND column 

Time complexity
- Adjacency List is faster at iterating over ALL EDGES
    - b/c only store connections vs. matrix which stores a lot of empty space

- Adjacency Matrix is faster at looking up SPECIFIC EDGE
    - just need to look up specific slot in matrix -> O(1)
    - vs List where need to find key first and then iterate of list of values -> O(v + e)



