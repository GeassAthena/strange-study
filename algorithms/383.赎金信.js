/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let s = ransomNote.length, n = magazine.length;
  if (s === 0 || s > n) return false;

  let result = true;
  let strs = magazine.split('');
  for (let i = 0; i < s; i++) {
    let index = strs.indexOf(ransomNote[i]);
    if (index === -1) {
      result = false;
      break;
    } else {
      strs[index] = '';
    }
  }

  return result;
};
// @lc code=end

