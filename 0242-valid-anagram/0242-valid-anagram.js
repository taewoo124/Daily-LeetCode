/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const hashMap = {};
    
    for (const char of s) {
        if (hashMap[char]) {
            hashMap[char] += 1;
        } else {
            hashMap[char] = 1;
        }
    }
    
    for (const char of t) {
        if (hashMap[char]) {
            hashMap[char] -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};