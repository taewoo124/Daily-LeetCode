/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let longString = t;
    let shortString = s;

    if (s.length > t.length) {
        longString = s;
        shortString = t;
    }

    const hashMap = {};

    for (const char of longString) {
        if (hashMap[char]) {
            hashMap[char] += 1;
        } else {
            hashMap[char] = 1;
        }
    }

    for (const char of shortString) {
        if (hashMap[char]) {
            hashMap[char] -= 1;
        } else {
            continue;
        }
    }

    const result = Object.values(hashMap).reduce((a, b) => a + b, 0);

    return result === 0;
};