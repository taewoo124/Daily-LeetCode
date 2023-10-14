/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num < 2) return true;

  let left = 2
  let right = num / 2;
    
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const powMid = mid * mid;

    if (powMid === num) {
      return true;
    } else if (powMid > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
    
    return false;
};