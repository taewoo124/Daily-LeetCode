function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [];
  
  function twoSum(i) {
    const seen = new Set();

    for (let j = i + 1; j < nums.length; j++) {
      const target = 0 - nums[i] - nums[j];

      if (seen.has(target)) {
        res.push([nums[i], nums[j], target]);

        while (nums[j] === nums[j + 1]) j++;
      }
      seen.add(nums[j]);
    }
  }
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i === 0 || nums[i - 1] !== nums[i]) twoSum(i);
  }
  
  return res;
};

