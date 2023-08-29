/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n);
  }
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0];
    for (let j = 1; j < i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
    }
    dp[i][i] = dp[i - 1][i - 1] + triangle[i][i];
  }
  return Math.min(...dp[n - 1]);
};
// @lc code=end

// 从底部搜索
var minimumTotal = function(triangle) {
  let n = triangle.length;
  let dp = triangle.pop();
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
}