/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanString = "";
    
    for (let i = 0; i < s.length; i += 1) {
        const lowerString = s.toLowerCase();
        
        if ("a" <= lowerString[i] && "z" >= lowerString[i] || "0" <= lowerString[i] && "9" >= lowerString[i]) {
            cleanString += lowerString[i];
        }
    }
    const reverseString = cleanString.split("").reverse().join("");
    
    return cleanString === reverseString;
};