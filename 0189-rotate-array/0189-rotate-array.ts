/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const stack: number[] = [];

  while (k > 0) {
    stack.push(nums.pop());
    nums.unshift(stack.shift());
    k--
  }
};