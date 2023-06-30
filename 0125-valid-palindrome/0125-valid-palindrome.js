/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanedString = "";
    
    for (let i = 0; i < s.length; i += 1) {
        const lowerChar = s[i].toLowerCase();
        if ((lowerChar >= 'a' && lowerChar <= 'z') || (lowerChar >= '0' && lowerChar <= '9')) {
            cleanedString += lowerChar;
        }
    }

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
};