function countSubstrings(s: string): number {
  const result: string[] = [];
  
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      const palindromString = s.slice(i, j);

      if (checkPalindrom(palindromString)) result.push(palindromString);
    }
  }
  
  return result.length;
};


function checkPalindrom (str: string): boolean {
  let left: number = 0;
  let right: number = str.length - 1;
  
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    
    left++;
    right--;
  }
  
  return true;
}