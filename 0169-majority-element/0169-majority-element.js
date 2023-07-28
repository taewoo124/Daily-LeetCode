/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const hashMap = {};
  
  for (const num of nums) {
    if(hashMap[num]) {
      hashMap[num] += 1
    } else {
      hashMap[num] = 1;
    }
  }
  
  for (const num in hashMap) {
    if (hashMap[num] > nums.length / 2) {
      return parseInt(num);
    }
  }
  
  return -1;
};