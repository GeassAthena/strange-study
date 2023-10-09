/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return '0';
  let flag = num < 0;
  let ans = [];
  num = Math.abs(num);
  while (num > 0) {
    ans.push(num % 7);
    num = Math.floor(num / 7);
  }
  if (flag) ans.push('-');
  return ans.reverse().join('');
};
// @lc code=end

