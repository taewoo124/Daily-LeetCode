/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hashMap = {};
  const size = nums.length / 2;

  for (const char of nums) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char]++;
    }

    if (hashMap[char] > size) return char;
  }
};