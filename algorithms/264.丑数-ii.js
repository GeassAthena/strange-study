/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n === 1) return 1;
    let dp = new Array(n + 1);
    dp[1] = [1];
    let a2 = 1, a3 = 1, a5 = 1;
    for (let i = 2; i <= n; i++) {
      let num1 = dp[a2] * 2, num2 = dp[a3] * 3, num3 = dp[a5] * 5;
      dp[i] = Math.min(num1, num2, num3);
      if (dp[i] === num1) {
        a2++;
      }
      if (dp[i] === num2) {
        a3++;
      }
      if (dp[i] === num3) {
        a5++;
      }
    }
  
    return dp[n];
  };
  // @lc code=end
  
  