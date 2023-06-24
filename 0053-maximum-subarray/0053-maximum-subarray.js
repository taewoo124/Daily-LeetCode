/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const newArr = [];

    for (let i = 0; i < nums.length; i += 1) {
        newArr[i] = nums[i];

      if (newArr[i] < newArr[i - 1] + nums[i]) {
        newArr[i] = newArr[i - 1] + nums[i];
      }
    }

    return Math.max(...newArr);
};