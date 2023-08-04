/*
 * @lc app=leetcode.cn id=822 lang=javascript
 *
 * [822] 翻转卡片游戏
 */

// @lc code=start
/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function(fronts, backs) {
  let result = 2001;
  let set = new Set();
  for (let i = 0; i < fronts.length; i++) {
    if (fronts[i] === backs[i]) {
      set.add(fronts[i]);
    }
  }
  for (let i = 0; i < fronts.length; i++) {
    if (!set.has(fronts[i])) {
      result = Math.min(result, fronts[i]);
    }
    if (!set.has(backs[i])) {
      result = Math.min(result, backs[i]);
    }
  }
  return result === 2001 ? 0 : result;
};
// @lc code=end

