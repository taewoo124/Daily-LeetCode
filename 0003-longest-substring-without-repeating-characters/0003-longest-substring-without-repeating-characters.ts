function lengthOfLongestSubstring(s: string): number {
  let start: number = 0;
  let maxLength: number = 0;
  const map = new Map();
  
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      start = Math.max(map.get(s[i]) + 1, start);
    }
    
    maxLength = Math.max(maxLength, i - start + 1);
    
    map.set(s[i], i);
  }
  
  return maxLength;
};