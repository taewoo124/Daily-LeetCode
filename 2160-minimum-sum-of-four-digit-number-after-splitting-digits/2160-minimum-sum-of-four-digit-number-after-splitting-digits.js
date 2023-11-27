/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  const digits = num.toString().split('');

  digits.sort();

  const new1 = parseInt(digits[0] + digits[2]);
  const new2 = parseInt(digits[1] + digits[3]);

  return new1 + new2;
};
