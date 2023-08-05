/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!needle) return 0;

  const checkInclusion = haystack.includes(needle);
  const checkIndex = haystack.indexOf(needle);

  return checkInclusion ? checkIndex : -1;
};