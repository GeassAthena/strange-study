/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) return s
  let ans = ''
  let step = 2 * numRows - 2
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j + i < s.length; j += step) {
      ans += s.charAt(j + i)
      if (i != 0 && i != numRows - 1 && j + step - i < s.length) {
        ans += s.charAt(j + step - i)
      }
    }
  }
  return ans
};
// convert("PAYPALISHIRING", 4)
// @lc code=end
