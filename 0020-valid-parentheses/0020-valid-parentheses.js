/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const bracket = {
        ")": "(",
        "}": "{",
        "]": "["
    };
    const stack = [];

    for (let char of s) {
        if (bracket[char]) {
            if (stack.length === 0 || stack.pop() !== bracket[char]) {
                return false;
            }
        } else {
            stack.push(char);
            console.log("stack: ", stack);
        }
    }
    
    return stack.length === 0;
};
