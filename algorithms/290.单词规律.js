/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let map = new Map();
  let p = pattern.split('');
  let strs = s.split(' ');

  if (strs.length !== p.length) {
    return false;
  }

  for (let i = 0; i < p.length; i++) {
    if (map.has(p[i])) {
      if (map.get(p[i]) !== strs[i]) {
        return false;
      }
    } else {
      if (Array.from(map.values()).includes(strs[i])) {
        return false;
      } else {
        map.set(p[i], strs[i]);
      }
    }
  }

  return true;
};
// wordPattern("abba", "dog dog dog dog")
// @lc code=end

