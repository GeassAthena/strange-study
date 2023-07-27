/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0]) return 0;
  let m = obstacleGrid.length, n = obstacleGrid[0].length;
  let dp = new Array(m).fill(0).map(i => new Array(n).fill(0));

  dp[0][0] = 1;
  for (let i = 1; i < m; i++) {
    dp[i][0] = obstacleGrid[i][0] === 1 || dp[i - 1][0] === 0 ? 0 : 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = obstacleGrid[0][i] === 1 || dp[0][i - 1] === 0 ? 0 : 1;
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
// @lc code=end

