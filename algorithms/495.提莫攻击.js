/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  if (timeSeries.length == 1) return duration;
  let total = 0;
  let last = timeSeries[0];

  for (let i = 1; i < timeSeries.length; i++) {
    let cur = timeSeries[i];
    if (cur - last < duration) {
      total += (cur - last);
    } else {
      total += duration;
    }
    last = cur;
  }

  return total + duration;
};
// @lc code=end

