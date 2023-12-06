function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const hashMap = {};
  
  for (const char of s) {
    if (!hashMap[char]) hashMap[char] = 0;

    hashMap[char]++;
  }
  
  for (const char of t) {
    if (!hashMap[char]) return false;
    hashMap[char]--;
  }
  
  for (const key in hashMap) {
    if (hashMap[key] !== 0) return false;
  }
  
  return true;
};