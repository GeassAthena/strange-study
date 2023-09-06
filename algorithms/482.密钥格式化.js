/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
  let ss = s.replaceAll('-', '').toUpperCase();
  let n = ss.length;
  let ans = [];
  for (let i = n; i > 0;) {
    ans.unshift(ss.slice(i >= k ? i - k : 0, i));
    i -= k;
  }
  return ans.join('-');
};
// licenseKeyFormatting('2-5g-3-J', 2);
// @lc code=end

