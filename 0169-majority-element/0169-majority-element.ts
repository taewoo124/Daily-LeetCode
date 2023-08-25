function majorityElement(nums: number[]): number {
  const map = new Map<number, number>();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let maxKey = nums[0];
  let maxValue = map.get(maxKey) || 0;

  map.forEach((value, key) => {
    if (value > maxValue) {
      maxKey = key;
      maxValue = value;
    }
  });

  return maxKey;
};