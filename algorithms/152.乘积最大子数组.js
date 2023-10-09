/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let preMin = nums[0], preMax = nums[0], ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let temp = preMin * nums[i], temp1 = preMax * nums[i];
    preMax = Math.max(nums[i], temp, temp1);
    preMin = Math.min(nums[i], temp, temp1);
    ans = Math.max(preMax, ans);
  }
  return ans;
};
// @lc code=end

