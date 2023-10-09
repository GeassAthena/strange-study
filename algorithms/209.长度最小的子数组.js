/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let len = nums.length;
  if (len === 0) return 0;

  let ans = Number.MAX_VALUE;
  let l = 0, r = 0, sum = 0;
  while (r < len) {
    sum += nums[r];
    while (sum >= target) {
      ans = Math.min(ans, r - l + 1);
      sum -= nums[l];
      l++;
    }
    r++;
  }

  return ans === Number.MAX_VALUE ? 0 : ans;
};
// @lc code=end

