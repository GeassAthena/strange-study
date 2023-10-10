/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let n = nums.length;
  if (n === 1) return nums[0];
  let dp_0 = nums[0], dp_1 = Math.max(nums[0], nums[1]);
  let dp_max = dp_1;
 
  for (let i = 2; i < n; i++) {
    dp_max = Math.max(dp_0 + nums[i], dp_1);
    dp_0 = dp_1;
    dp_1 = dp_max;
  }

  return dp_max;
};
// @lc code=end

