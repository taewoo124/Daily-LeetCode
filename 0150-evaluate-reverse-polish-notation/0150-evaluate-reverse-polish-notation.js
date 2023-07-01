/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const obj = {
        "+": (b, a) => a + b,
        "-": (b, a) => a - b,
        "*": (b, a) => a * b,
        "/": (b, a) => Math.trunc(a / b),
    }
    
    for (const char of tokens) {
        if (obj[char]) {
            const top = stack.pop();
            const second = stack.pop();
            stack.push(obj[char](top, second));
        } else {
            stack.push(Number(char));
        }
    }
    
    return stack.pop();
};