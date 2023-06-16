/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const count = {};
    const standard = Math.floor(nums.length / 2);

    for (const char of nums) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
        
        if (count[char] > standard) {
            return char;
        }
    }
};