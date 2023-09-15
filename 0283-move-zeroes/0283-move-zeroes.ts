/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const a: number[] = [...nums];
  const zeroStack: number[] = [];
  const stack: number[] = [];

  for (const char of nums) {
    char === 0 ? zeroStack.push(a.shift()) : stack.push(a.shift());
  }

  for (let i = 0; i < stack.length; i++) {
      nums[i] = stack[i];
  }

  for (let j = 0; j < zeroStack.length; j++) {
      nums[stack.length + j] = zeroStack[j];
  }
};