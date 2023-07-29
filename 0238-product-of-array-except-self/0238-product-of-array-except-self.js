/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const answer = new Array(nums.length);
  answer.fill(1);
  
  let left = 1;
  
  for (let i = 0; i < nums.length; i += 1) {
    answer[i] *= left;
    left *= nums[i];
  }
  
  let right = 1;
  
  for (let i = nums.length - 1; i >= 0; i -= 1) {
    answer[i] *= right;
    right *= nums[i]
  }
  
  return answer;
};