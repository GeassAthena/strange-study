/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let i = 0, len = nums.length;
  if (len === 1) return true;
  for(let j = 0; j < len; j++) {
    if (j <= i) {
      i = Math.max(i, j + nums[j])
      if (i >= len - 1) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end

