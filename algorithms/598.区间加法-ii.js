/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 区间加法 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let minX = m, minY = n;
    ops.forEach(op => {
      minX = Math.min(op[0], minX);
      minY = Math.min(op[1], minY);
    })
    return minX * minY;
  };
  // @lc code=end
  
  