/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0;
  
  const checkInclusion = haystack.includes(needle);
  
  return checkInclusion ? haystack.indexOf(needle) : -1;
};