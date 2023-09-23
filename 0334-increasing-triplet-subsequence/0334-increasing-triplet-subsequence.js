/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let firstMin = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;

    for (const num of nums) {
      if (num <= firstMin) {
        firstMin = num;
      } else if (num <= secondMin) {
        secondMin = num;
      } else {
        return true;
      }
    }

    return false;
};
