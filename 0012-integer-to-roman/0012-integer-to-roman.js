/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
  let result = "";
  const romanArray = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  
  for (const [roman, value] of romanArray) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  
  return result;
};