/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  return !s.includes('LLL') && s.indexOf('A') === s.lastIndexOf('A');
};
// @lc code=end

