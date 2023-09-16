function maxArea(height: number[]): number {
  const { log } = console;

  let left: number = 0;
  let right: number = height.length - 1;
  let maxNum: number = 0;
  
  while (left < right) {
    const minHeight: number = Math.min(height[left], height[right]);
    const currentArea: number = minHeight * (right - left);
    
    maxNum = Math.max(maxNum, currentArea);
    
    height[left] < height[right] ? left++ : right--;
  }
  
  return maxNum;
};