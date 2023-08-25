/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let ans = 0;
  let map = {};
  for (let i = 0; i < s.length; i++) {
    if (map.hasOwnProperty(s[i])) {
      map[s[i]] += 1;
    } else {
      map[s[i]] = 1;
    }
  }

  let odd = false;

  for (let key in map) {
    if (map[key] % 2 === 0) {
      ans += map[key];
    } else {
      odd = true;
      ans += map[key] - 1;
    }
  }

  return odd ? ans + 1 : ans;
};
// @lc code=end

