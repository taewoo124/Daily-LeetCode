/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  let digits = num.toString().split('');

  digits.sort();

  let new1 = parseInt(digits[0] + digits[2]);
  let new2 = parseInt(digits[1] + digits[3]);

  return new1 + new2;
};
