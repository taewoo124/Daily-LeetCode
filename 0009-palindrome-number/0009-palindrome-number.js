/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString();

  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    
    left++;
    right--;
  }
  
  return true;
};