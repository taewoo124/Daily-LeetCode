/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const nonDuplicatedArray = new Set([...nums]);
  
  return nonDuplicatedArray.size === nums.length ? false : true;
};