/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const hashMap = {};
  let result;
  
  for (const char of nums) {
    if (hashMap[char]) {
      hashMap[char]++;
    } else {
      hashMap[char] = 1;
    } 
  }
  
  for (const num in hashMap) {
    if (hashMap[num] === 1) return num;
  }
};