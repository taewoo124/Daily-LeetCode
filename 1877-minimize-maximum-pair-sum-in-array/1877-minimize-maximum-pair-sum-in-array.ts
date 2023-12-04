function minPairSum(nums: number[]): number {
  const sortedArray: number[] = [...nums].sort((a, b) => a- b);
  const array: number[] = [];
  
  let start: number = 0;
  let end: number = nums.length - 1;
  const mid: number = (start + end) / 2;
  
  while (start <= mid) {
    array.push(sortedArray[start] + sortedArray[end]);
    start++;
    end--;
  }
  
  const result: number = Math.max(...array);
  
  return result;
};