/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let map = [/^[eiopqrtuwy]+$/, /^[adfghjkls]+$/, /^[bcmnvxz]+$/];
  let ans = [];
  words.forEach(w => {
    if (map.some(reg => reg.test(w.toLowerCase()))) {
      ans.push(w);
    }
  })
  return ans;
};
// findWords(["Hello","Alaska","Dad","Peace"])
// @lc code=end

