function twoSum(nums: number[], target: number): number[] {
  const hashMap = {};
  
  nums.forEach((num, index) => {
    hashMap[num] = index;
  })
  
  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i];
    
    if (hashMap[complement] && hashMap[complement] !== i) return [i, hashMap[complement]];
  }
};