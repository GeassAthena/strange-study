/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let m = grid.length, n = grid[0].length, count = 0, edge = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) continue;
      count++;

      if (j < n - 1 && grid[i][j + 1] === 1) {
        edge++;
      }
      if(i < m - 1 && grid[i + 1][j] === 1) {
        edge++;
      }
    }
  }

  return count * 4 - 2 * edge;
};
// @lc code=end

