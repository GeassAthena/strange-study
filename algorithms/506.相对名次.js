/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  let sortS = score.slice().sort((a, b) => b - a);
  let ans = [];
  const desc = ["Gold Medal", "Silver Medal", "Bronze Medal"];
  for (let i = 0; i < score.length; i++) {
    let index = sortS.indexOf(score[i]);
    if (index < 3) {
      ans[i] = desc[index];
    } else {
      ans[i] = (index + 1) + '';
    }
  }
  return ans;
};
// @lc code=end

