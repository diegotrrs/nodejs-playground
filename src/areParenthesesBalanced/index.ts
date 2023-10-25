function areParenthesesBalanced(expression: string) {
  const stack = [];
  for (let char of expression) {
      if (char === '(') {
          stack.push(char);
      } else if (char === ')') {
          if (stack.length === 0) return false; // Closing parenthesis without a matching open
          stack.pop();
      }
  }
  return stack.length === 0; // If stack is empty, then parentheses are balanced
}

console.log(areParenthesesBalanced("(a+b)"));     // true
console.log(areParenthesesBalanced("(a+b)("));    // false