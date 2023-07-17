/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  const sortedG = g.sort((a, b) => a - b);
  const sortedS = s.sort((a, b) => a - b);;
  
  let i = 0;
  let j = 0
  
  while (i < sortedG.length && j < sortedS.length) {
    if (sortedG[i] <= sortedS[j]) {
      i += 1;
    } j += 1;
  }
  
  return i;
};