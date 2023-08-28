/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let len1 = num1.length - 1, len2 = num2.length - 1;
  let ans = [];
  let cur = 0;
  while (len1 >= 0 || len2 >= 0 || cur > 0) {
    if (len1 >= 0) {
      cur += +num1[len1];
      len1--;
    }
    if (len2 >= 0) {
      cur += +num2[len2];
      len2--;
    }
    ans.push(cur % 10);
    cur = Math.floor( cur / 10);
  }
  return ans.reverse().join('');
};
// addStrings('11', '123')
// @lc code=end

