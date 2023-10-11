/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const array = [];
  const results = [""];

  const alphabetInNums = {
    '2': ["a", "b", "c"],
    '3': ["d", "e", "f"],
    '4': ["g", "h", "i"],
    '5': ["j", "k", "l"],
    '6': ["m", "n", "o"],
    '7': ["p", "q", "r", "s"],
    '8': ["t", "u", "v"],
    '9': ["w", "x", "y", "z"],
  }

  for (let i = 0; i < digits.length; i++) {
    array.push(alphabetInNums[digits[i]]);
  }

  for (const chars of array) {
    const temp = [];

    for (const result of results) {
      for (const char of chars) {
          temp.push(result + char);
        }
      }
    results.length = 0;
    results.push(...temp);
  }

  return results;
};