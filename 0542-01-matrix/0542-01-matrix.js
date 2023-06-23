/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    if (!mat || !mat.length) return [];

    let m = mat.length;
    let n = mat[0].length;
    let queue = [];
    
    for (let i = 0; i < m; i += 1) {

        for (let j = 0; j < n; j += 1) {

            if (mat[i][j] === 1) {
              mat[i][j] = Infinity;
            } else {
              queue.push([i, j]);
            }
        }
    }
    
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    while(queue.length) {
        let [x, y] = queue.shift();
        
        for (let [dx, dy] of dirs) {
            let i = x + dx, j = y + dy;
            
            if (i < 0 || j < 0 || i >= m || j >= n || mat[i][j] <= mat[x][y] + 1) continue;

            queue.push([i, j]);
            mat[i][j] = mat[x][y] + 1;
        }
    }
    
    return mat;
};