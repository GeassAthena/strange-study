/*
 * @lc app=leetcode.cn id=521 lang=javascript
 *
 * [521] 最长特殊序列 Ⅰ
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  let len1 = a.length;
  let len2 = b.length;
  if (len1 === len2 && a === b) {
    return -1;
  }
  return len1 > len2 ? len1 : len2;
};
// @lc code=end

