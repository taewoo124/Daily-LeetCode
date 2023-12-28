/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hashMap = {};
  
  for (const num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num]++;
    }
  }
  
  for (const key in hashMap) {
    if (hashMap[key] === 1) return key;
  }
};