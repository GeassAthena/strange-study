/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let len = nums.length;
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    let index = (nums[i] - 1) % len;
    nums[index] += len;    
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= len) {
      ans.push(i + 1);
    }   
  }
  return ans;
};
// @lc code=end

