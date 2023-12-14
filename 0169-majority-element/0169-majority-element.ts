function majorityElement(nums: number[]): number {
  const hashMap = {};
  
  for (const num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 1;
    } else {
      hashMap[num]++;
    }
  }
  
  const array: [string, number][]= Object.entries(hashMap);
  const sortedArray = array.sort((a, b) => b[1] - a[1]);
  const result: number = Number(sortedArray[0][0]);
  
  return result;
};