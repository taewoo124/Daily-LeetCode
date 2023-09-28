/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = '';
    
    while (i >= 0 || j >= 0) {
      let sum = carry;

      if (i >= 0) {
        sum += parseInt(a[i], 10);
        i--;
      }

      if (j >= 0) {
        sum += parseInt(b[j], 10);
        j--;
      }

      result = (sum % 2) + result;
      carry = Math.floor(sum / 2);
    }
    
    if (carry) {
      result = carry + result;
    }
    
    return result;
};
