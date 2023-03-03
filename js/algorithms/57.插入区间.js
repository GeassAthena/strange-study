/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const ans = [];
  let left = newInterval[0];
  let right = newInterval[1];
  let placed = false;
  for (let i = 0; i < intervals.length; i++) {
    const block = intervals[i];
    if (right < block[0]) {
      // 当前区间右侧无交集
      if (!placed) {
        ans.push([left, right]);
        placed = true;
      }
      ans.push(block);
    } else if (left > block[1]) {
      // 左侧无交集
      ans.push(block);
    } else {
      // 计算交集
      left = Math.min(left, block[0]);
      right = Math.max(right, block[1]);
    }
  }
  if (!placed) {
    ans.push([left, right])
  }
  return ans;
};
// @lc code=end

