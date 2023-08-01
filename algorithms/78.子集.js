/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    result.forEach(r => {
      result.push([...r, nums[i]]);
    })
    result.push([nums[i]]);
  }
  result.push([]);
  return result;
};
// @lc code=end