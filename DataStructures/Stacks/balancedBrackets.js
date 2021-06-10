// fx that takes in a string made up of brackets ( (, [,{, }, ], )) and other optional characters.  Should return a BOOLEAN representing whether the string is balanced with regards to brackets

// balanced = has as many opening brackets of a certain type as it has closing brackets of that type and if no bracked it unmatched

// branches can't overlap each other like [(]) => false
// a closing bracket can't come before opening bracket

// "()[]{}" => true
// "([)]" => false
// "{[]}" => true
// "()[]{}{" => false

function balancedBrackets(str) {
    // use STACK to maintain order of OPENING brackets
      // when find a closing bracket, check to see if the last added opening bracket to the stack is the correct one
      // LAST IN, FIRST OUT
    const stack = [];
    // use for easy lookup of matching bracket
    const obj = {'(': ')', '[':']', '{':'}'};
    
    for (let i = 0; i < str.length; i++) {
      const currChar = str[i];
      // if current bracket is an OPENING bracket
      if (currChar === '(' || currChar === '[' || currChar === '{') {
        // add it to the top of the stack (end of array)
        stack.push(currChar);
      }
      
      // if current bracket is a CLOSING bracket
      else if (currChar === ')' || currChar === ']' || currChar === '}') {
        // pop the last bracket off the stack
        const lastItem = stack.pop();
        // use the obj to see if the current bracket is the correct closing bracket for the opening bracket we just took off the stack
            // if it isn't, return false
        if (obj[lastItem] !== currChar) {
          return false;
        }
      }
    }
    // if there's an extra OPENING bracket with no closing bracket (not balanced), the stack won't be empty after finishing for loop
      // this line checks for that situation
    return stack.length === 0 ? true : false;
  };
  
  //balancedBrackets("()[]{}") // true
  //balancedBrackets("([)]") // false
  //balancedBrackets("{[]}") // true
  balancedBrackets("()[]{}{") // false
  
  // time complexity and space complexity is O(n) where n is length of string
    // must traverse entire string
    // appending/popping values to stack are contant time