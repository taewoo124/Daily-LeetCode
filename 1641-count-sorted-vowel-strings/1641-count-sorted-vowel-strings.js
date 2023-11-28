/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  const dp = new Array(5).fill(1);
  
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < dp.length; j++) {
      dp[j] = dp.slice(j).reduce((acc, cur) => acc + cur);
    }
  }

  const result = dp.reduce((acc, cur) => acc + cur);

  return result;
};