/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  return Math.max(nums[0] + rob1(nums.slice(2, nums.length - 1)), rob1(nums.slice(1)));
};

var rob1 = function(nums) {
  if (nums.length === 1) return nums[0];
  let dp_0 = 0, dp_1 = 0;

  for (let i = 0; i < nums.length; i++) {
    [dp_0, dp_1] = [dp_1, Math.max(dp_0 + nums[i], dp_1)];
  }
  return dp_1;
}
// @lc code=end

