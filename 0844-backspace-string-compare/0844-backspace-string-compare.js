/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sStack = [];
    const tStack = [];

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
        sStack.pop();
      } else {
        sStack.push(s[i]);
      }
    }

    for (let i = 0; i < t.length; i++) {
      if (t[i] === "#") {
        tStack.pop();
      } else {
        tStack.push(t[i]);
      }
    }
    
    const sString = sStack.join("");
    const tString = tStack.join("");
    
    return sString === tString;
};