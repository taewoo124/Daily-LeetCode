/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  const result = [];
  
  while (result.length !== 2) {
    if (left === right) {
      left++
      right = nums.length - 1;
    } else if (nums[left] + nums[right] === target) {
      result.push(left, right);
    }
    
    right--;
  }
  
  return result;
};

