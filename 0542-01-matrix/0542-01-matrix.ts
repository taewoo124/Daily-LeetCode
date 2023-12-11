function updateMatrix(mat: number[][]): number[][] {
  if (!mat.length) return mat;

  let rows: number = mat.length;
  let cols: number = mat[0].length;
  
  const queue = [];
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = Number.MAX_SAFE_INTEGER;
      }
    }
  }
  
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
  while (queue.length > 0) {
    const cell = queue.shift();
    
    for (const dir of dirs) {
      const r = cell[0] + dir[0];
      const c = cell[1] + dir[1];
      
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        if (mat[r][c] > mat[cell[0]][cell[1]] + 1) {
          mat[r][c] = mat[cell[0]][cell[1]] + 1;
          
          queue.push([r, c]);
        }
      } 
    }
  }
  
  return mat;
};