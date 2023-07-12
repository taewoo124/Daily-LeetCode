/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const hashMap = {};
  let oddCount = 0;
  
  for (const char of s) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char] += 1;
    }
    
    if (hashMap[char] % 2 === 1) {
      oddCount += 1;
    } else {
      oddCount -= 1;
    }
  }
  
  if (oddCount > 1) {

    return s.length - (oddCount - 1);
  } else {

    return s.length;
  }
};