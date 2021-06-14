// Given root of a binary tree, flatten the tree into a 'linked list':
  // the linked list should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null
  // the linked list should be in the same order as a PRE ORDER TRAVERSAL of the binary tree


// ORIGINAL TREE
  //       5
  //     /   \
  //    2      1
  //     \    /  \
  //      6  10  11
  //     /
  //   44
  //     \
  //      23

// For a current node (5), check if it has a L child or not.
  // If yes, find the last node in the rightmost branch of the subtree rooted at this left child = rightmostNode (6)
  // Hook up rightmostNode (6) to right child of current node (1)
  // Set R child of current node to be current L child (2)
  // Set L child of current node to be null
  
  //       5
  //     /   \
  //   null    2
  //            \   
  //              6
  //             /  \
  //           44    1   
  //            \   /  \
  //            23 10  11

  // When current node is 6, repeat process to find rightmostNode (23) and hook it up right child of current node (1)
  // Set R child of current node to be current L child (44)
  // Set L child of current node to be null


// Continue the process
  //       5
  //     /   \
  //   null    2
  //             \   
  //               6
  //             /   \
  //           null   44    
  //                    \   
  //                     23 
  //                       \
  //                         1 
  //                        /  \
  //                      10   11
  // 





class TreeNode {
    constructor(value) {
        this.value = value
        this.left = null,
        this.right = null
    }
}

function flatten(root) {
    // if no root,
    if (!root) {
        return null;
    }
    let currNode = root;

    // keep going until done processing entire tree & node is null
    while (currNode) {
        // for every node, check if it has a L child or not
        if (currNode.left) {
        // find the 1st node on rightmost branch of L subtree which does NOT have a R child = rightmostNode
        let rightmostNode = currNode.left;
        
        while (rightmostNode.right) {
            rightmostNode = rightmostNode.right;
        }

        // hook up the rightmostNode to be the right child of our current node
        rightmostNode.right = currNode.right;
        // set the right child of currNode to be the current L child
        currNode.right = currNode.left;
        // set left child of currNode to be null
        currNode.left = null;
        }
        // move on to R side of the tree
        currNode = currNode.right;
    }
}

// Time complexity O(n) where n is number of nodes in tree
    // process each node of tree at most twice
        // once when node is the current node
        // twice when come across the node when trying to find rightmostNode
    // slower than recursive version

// Space complexity O(1)
    // less space than recursive version
