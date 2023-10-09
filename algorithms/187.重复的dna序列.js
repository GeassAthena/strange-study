/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let map = new Map();
  let ans = [];

  for (let i = 0; i + 10 <= s.length; i++) {
    const sub = s.slice(i, i + 10)
    map.set(sub, (map.get(sub) || 0) + 1);
    if (map.get(sub) === 2) {
      ans.push(sub);
    }
  }
  return ans;
};
// @lc code=end

