function moveZeroes(nums: number[]): void {
  let insertPos: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos] = nums[i];
      insertPos++;
    }
  }

  for (let i = insertPos; i < nums.length; i++) {
    nums[i] = 0;
  }
}
