/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let res = []
  while (n !== 0) {
    n--
    res.push(String.fromCharCode(n % 26 + 'A'.charCodeAt()))
    n = Math.floor(n / 26)
  }
  return res.reverse().join('')
};
// @lc code=end

