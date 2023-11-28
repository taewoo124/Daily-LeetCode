/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
  let result = 0;
  const sortedArray = nums.sort((a, b) => a - b);
  const lastIndex = sortedArray.length - 1;
  
  while (k) {
    result += sortedArray[lastIndex];
    sortedArray[lastIndex] = sortedArray[lastIndex] + 1;
    k--
  }
  
  return result;
};