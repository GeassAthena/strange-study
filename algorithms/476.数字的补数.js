/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let target = 1;
  while (target < num) {
    target = (target << 1) + 1
  }
  return num ^ target;
};
// @lc code=end

