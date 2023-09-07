/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 1) return 1;

  let twoStepsBefore = 1;
  let oneStepBefore = 1;
  let current;

  for (let i = 2; i <= n; i++) {
    current = oneStepBefore + twoStepsBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = current;
  }

  return current;
};