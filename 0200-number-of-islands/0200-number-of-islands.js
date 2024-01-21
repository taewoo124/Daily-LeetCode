/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0;
  }

  let numIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        numIslands++;
        dfs(grid, i, j);
      }
    }
  }

  function dfs(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === "0") {
      return;
    }

    grid[i][j] = "0";

    dfs(grid, i + 1, j); // down
    dfs(grid, i - 1, j); // up:
    dfs(grid, i, j + 1); // right
    dfs(grid, i, j - 1); // left
  }

  return numIslands;
};
