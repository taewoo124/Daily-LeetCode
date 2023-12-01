function minimumOperations(nums: number[]): number {
  let count: number = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const isZeroArray: boolean = nums.every((x) => x === 0);
    
    if (isZeroArray) break;
    
    count++;
    
    const minNumber: number = findNonZeroMinNumber(nums);
    
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > 0) {
        nums[j] = nums[j] - minNumber;
      }
    }
  }
  
  return count;
};

function findNonZeroMinNumber(nums: number[]): number {
  let minNumber: number = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNumber && nums[i] > 0) minNumber = nums[i];
  }
  
  return minNumber;
}