/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // 数学推理
  // return (s + s).substring(1, s.length * 2 - 1).includes(s);

  // 常规解法
  for (let i = 1; i * 2 <= s.length; i++) {
    if (s.length % i === 0) {
      let flag = true;
      for (let j = i; j < s.length; j++) {
        if (s[j] != s[j - i]) {
          flag = false;
          break;
        }
      }
      if (flag) {
        return true;
      }
    }
  }

  return false;
};
// @lc code=end

