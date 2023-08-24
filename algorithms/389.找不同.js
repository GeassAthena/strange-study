/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let result = 0;

  for (const ch of s) {
    result ^= ch.charCodeAt();
  }
  for (const ch of t) {
    result ^= ch.charCodeAt();
  }
  return String.fromCharCode(result);
};
// @lc code=end

