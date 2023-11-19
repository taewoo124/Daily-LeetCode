function combinationSum2(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  candidates.sort((a, b) => a - b);

  function backtrack(start: number, target: number, path: number[]): void {
    if (target === 0) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) break;

      if (i > start && candidates[i] === candidates[i - 1]) continue;

      path.push(candidates[i]);
      backtrack(i + 1, target - candidates[i], path);
      path.pop();
    }
  }

  backtrack(0, target, []);
  return result;
}
