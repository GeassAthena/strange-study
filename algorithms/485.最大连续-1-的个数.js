/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let count = 0;
  let cur = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      cur++;
    } else {
      count = Math.max(cur, count);
      cur = 0;
    }
  }
  count = Math.max(cur, count);

  return count;
};
// @lc code=end

