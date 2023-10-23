/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const length = s.length;
  const hashMap = {};
  let ans = 0;
  let left = 0;
  
  for (let i = 0; i < length; i++) {
    if (hashMap[s[i]] !== undefined)  left = Math.max(hashMap[s[i]] + 1, left);
      
    ans = Math.max(ans, i - left + 1);
    hashMap[s[i]] = i;
  }

  return ans;
};