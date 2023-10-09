/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
  let shift = 0;
  // 找到公共前缀
  while (left < right) {
    left >>= 1;
    right >>= 1;
      ++shift;
  }
  return left << shift;
};
// @lc code=end

