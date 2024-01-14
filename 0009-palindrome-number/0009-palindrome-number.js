/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const xToString = x.toString();

  let left = 0;
  let right = xToString.length - 1;

  while (left < right) {
    if (xToString[left] !== xToString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
