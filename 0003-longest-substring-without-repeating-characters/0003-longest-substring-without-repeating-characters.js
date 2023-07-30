/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const map = {};
  let ans = 0;

  for (let j = 0, i = 0; j < s.length; j++) {
    if (map[s[j]]) {
      i = Math.max(map[s[j]], i);
    }
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
  }
  
  return ans;
};