/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (nums.length === 0) return [];
  const result = [];
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 === nums.length || nums[i + 1] - nums[i] !== 1) {
      result.push('' + nums[left] + (left === i ? '' : `->${nums[i]}`))
      left = i + 1;
    }
  }
  return result;
};
// @lc code=end