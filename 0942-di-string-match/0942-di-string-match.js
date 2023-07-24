/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
  let start = 0;
  let end = s.length;
  
  const result = new Array(s.length + 1);
  
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "I") {
      result[i] = start++;
    } else {
      result[i] = end--;
    }
  }
  
  result[s.length] = start;
  
  return result;
};