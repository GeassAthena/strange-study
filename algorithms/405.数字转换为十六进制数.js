/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  if (num === 0) {
    return '0';
  }
  if (num < 0) {
    num += 2 ** 32;
  }
  let ans = [];
  let strMap = "0123456789abcdef"

  while (true) {
    if (num >= 16) {
      let m = num % 16;
      num = Math.floor(num / 16);
      ans.push(strMap.charAt(m));
    } else {
      ans.push(strMap.charAt(num));
      break;
    }
  }

  return ans.reverse().join('');
};
// @lc code=end

