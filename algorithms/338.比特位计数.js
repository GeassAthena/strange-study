/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  let result = new Array(n + 1).fill(0);
  let highbit = 0;
  for (let i = 1; i <= n; i++) {
    if ((i & (i - 1)) === 0) {
      highbit = i;
    } 
    result[i] = result[i - highbit] + 1;
  }
  return result;
};
// @lc code=end

