function canConstruct(ransomNote: string, magazine: string): boolean {
  const hashMap = {};
  
  for (const char of ransomNote) {
    if (!hashMap[char]) {
      hashMap[char] = 1;
    } else {
      hashMap[char]++;
    }
  }
  
  for (const char of magazine) {
    if (hashMap[char]) hashMap[char]--;
  }
  
  const values: number[] = Object.values(hashMap);
  const isZero: number = values.reduce((acc, cur) => acc + cur, 0);
  if (isZero === 0) return true;
  
  return false;
};