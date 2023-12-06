function search(nums: number[], target: number): number {
  let first: number = 0;
  let last: number = nums.length - 1;
  
  while (first <= last) {
    const mid: number = Math.floor((first + last) / 2);
    
    if (target > nums[mid]) {
      first = mid + 1;
    } else if (target < nums[mid]) {
      last = mid - 1;
    } else {
      return mid;
    }
  }
  
  return -1;
};