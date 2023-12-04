function minPairSum(nums: number[]): number {
  const sortedArray: number[] = [...nums].sort((a, b) => a- b);
  
  let start: number = 0;
  let end: number = nums.length - 1;
  
  let result = 0;
  
  while (start < end) {
    const sumPairNum: number = sortedArray[start] + sortedArray[end]
    
    result = Math.max(sumPairNum, result);

    start++;
    end--;
  }
  
  return result;
};