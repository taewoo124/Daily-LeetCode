/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);

    let productBefore = 1;

    for (let i = 0; i < length; i += 1) {
        result[i] *= productBefore;
        productBefore *= nums[i];
    }

    let productAfter = 1;

    for (let i = length - 1; i >= 0; i -= 1) {
        result[i] *= productAfter;
        productAfter *= nums[i];
    }

    return result;
};