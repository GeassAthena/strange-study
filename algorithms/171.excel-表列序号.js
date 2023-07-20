/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  let ans = 0
  for (let i = 0; i < columnTitle.length; i++) {
    ans = (ans * 26 + columnTitle.charCodeAt(i) - 64)
  }
  return ans
};
// @lc code=end

