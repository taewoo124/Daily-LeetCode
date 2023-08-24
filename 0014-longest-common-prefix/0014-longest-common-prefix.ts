function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  strs.sort();

  const first = strs[0];
  const last = strs[strs.length - 1];

  let index = 0;
  
  while (index < first.length && first[index] === last[index]) {
    index++;
  }
  return first.substring(0, index);
}