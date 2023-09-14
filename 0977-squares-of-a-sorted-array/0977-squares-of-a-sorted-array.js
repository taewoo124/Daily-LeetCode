/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const powNums = (num) => num * num;
  const result = nums.map((num) => powNums(num)).sort((a, b) => a - b);
  
  return result;
};