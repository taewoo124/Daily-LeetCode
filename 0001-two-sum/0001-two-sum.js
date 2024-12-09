/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const lookup = {};
  
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    
    if (lookup[x] !== undefined) {
      return [lookup[x], i];
    }
    
    lookup[nums[i]] = i;
  }
  
  return [];
};