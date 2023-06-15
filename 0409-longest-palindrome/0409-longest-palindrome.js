/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freqCount = {};
    let oddCount = 0;

    for (let char of s) {
        if (freqCount[char] === undefined) {
            freqCount[char] = 1;
        } else {
            freqCount[char]++;
        }

        if (freqCount[char] % 2 === 1) {
            oddCount++;
        } else {
            oddCount--;
        }
    }

    if (oddCount > 1) {
        return s.length - (oddCount - 1);
    } else {
        return s.length;
    }
};
