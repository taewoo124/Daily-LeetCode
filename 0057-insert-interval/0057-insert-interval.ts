function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  
  for (const interval of intervals) {
    if (interval[1] >= newInterval[0] && interval[0] <= newInterval[1]) {
      newInterval = [Math.min(interval[0], newInterval[0]), Math.max(interval[1], newInterval[1])]
    } else {
      result.push(interval);
    }
  }

  result.push(newInterval);
  result.sort((a, b) => a[0] - b[0]);
  
  return result;
};