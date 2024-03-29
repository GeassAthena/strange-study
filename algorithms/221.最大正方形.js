/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  let m = matrix.length, n = matrix[0].length;
  let maxLen = 0, dp = new Array(m).fill(0);
  dp = dp.map(i => {
    let arr = new Array(n).fill(0)
    return arr;
  })

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        if (i === 0 || j === 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
        }
        maxLen = Math.max(maxLen, dp[i][j]);
      }
    }
  }

  return maxLen * maxLen;
};
// maximalSquare([[1]])
// @lc code=end

