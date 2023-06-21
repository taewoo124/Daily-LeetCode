/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const sArr = [];
    const tArr = [];
    
    for (let i = 0; i < s.length; i += 1) {
        if (s[i] === "#") {
            sArr.pop();
        } else {
            sArr.push(s[i]);
        }
    }

    for (let i = 0; i <t.length; i += 1) {
        if (t[i] === "#") {
            tArr.pop();
        } else {
            tArr.push(t[i]);
        }
    }

    return sArr.join("") === tArr.join("");
};