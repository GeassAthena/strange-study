/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      let min = Number.MAX_VALUE;
      for (let j = 1; j * j <= i; j++) {
        min = Math.min(min, dp[i - j * j]);
      }
      dp[i] = min + 1;
    }
    return dp[n];
  };
  // @lc code=end
  
  