function climbStairs(n: number): number {
  return n <= 3 ? n : 2 * climbStairs(n - 2) + climbStairs(n - 3);
};