/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    let result = "";
    for (let j = i; j < i + needle.length; j++) {
      result += haystack[j]
    }
    
    if (result === needle) return i;
  }
  
  return -1;
};