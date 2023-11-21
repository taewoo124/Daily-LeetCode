function fib(n: number): number {
  const dp: number[] = new Array(n).fill(-1);
  
  dp[0] = 0;
  dp[1] = 1;
  
  return fibHelper(n, dp);
};

function fibHelper(n, dp): number {
  if (dp[n] >= n) return dp[n];
  
  dp[n] = fibHelper(n - 1, dp) + fibHelper(n - 2, dp);

  return dp[n];
}