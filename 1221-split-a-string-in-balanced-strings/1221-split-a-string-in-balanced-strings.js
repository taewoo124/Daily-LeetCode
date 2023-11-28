/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  let lCount = 0;
  let rCount = 0;
  let balancedCount = 0;
  
  for (const char of s) {
    if (char === "R") {
      rCount += 1;
    } else {
      lCount += 1;
    }
    
    if (lCount === rCount) {
      balancedCount += 1;
      rCount = 0;
      lCount = 0;
    }
  }
  
  return balancedCount;
};