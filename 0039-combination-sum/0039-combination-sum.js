/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [];

  const backtrack = (combination, remain, start) => {
    if (remain === 0) {
      res.push([...combination]);
      return;
    } else if (remain < 0) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(combination, remain - candidates[i], i);
      combination.pop();
    }
  }

  backtrack([], target, 0);
  return res;
};