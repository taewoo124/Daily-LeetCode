/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sortedS = [...s].sort().join();
    const sortedT = [...t].sort().join();

    return sortedS === sortedT
};