/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let count = 0;
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[i] === nums[j]) count += 1
        }
    }
    
    return count !== 0;
};