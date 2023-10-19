/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (map[char]) {
      let topElement = stack.pop();
      if (map[char] !== topElement) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
    
  return stack.length === 0;
};