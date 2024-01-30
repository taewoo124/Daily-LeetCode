/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let numStrs = nums.map(num => num.toString());

  numStrs.sort((a, b) => (b + a).localeCompare(a + b));

  if (numStrs[0] === "0") return "0";

  return numStrs.join("");
};
