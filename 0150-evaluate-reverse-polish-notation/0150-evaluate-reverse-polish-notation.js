/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
  const stack = [];

  tokens.forEach(token => {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const a = stack.pop();
      const b = stack.pop();

      switch (token) {
        case '+':
          stack.push(b + a);
          break;
        case '-':
          stack.push(b - a);
          break;
        case '*':
          stack.push(b * a);
          break;
        case '/':
          stack.push(parseInt(b / a));
          break;
      }
    }
  });

  return stack.pop();
};