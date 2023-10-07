/**
 * @param {string} s
 * @return {string}
 */

const checkIsPalindrome = (s, startIndex, endIndex) => {
  while (startIndex < endIndex) {
    if (s[startIndex] !== s[endIndex]) return false;
    
    startIndex++;
    endIndex--;
  }
  
  return true;
}

const longestPalindrome = function(s) {
  const { log } = console;
  
  const totalLength = s.length;
  let maxLength = 0;
  let startIndex = 0;
  
  for (let i = 0; i < totalLength; i++) {
    for (let j = i + 1; j < totalLength; j++) {
      if (checkIsPalindrome(s, i, j)) {
        if (j - i > maxLength) {
          maxLength = j - i;
          startIndex = i;
        }
      }
    }
  }
  
  return s.substring(startIndex, maxLength + startIndex + 1);
};