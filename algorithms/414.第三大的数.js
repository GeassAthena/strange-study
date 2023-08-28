/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let len = nums.length;
  if (len === 1) return nums[0];
  if (len === 2) return nums[0] > nums[1] ? nums[0] : nums[1];
  let a = -Number.MAX_VALUE, b = -Number.MAX_VALUE, c = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur > a) {
      c = b;
      b = a;
      a = cur;
    } else if (a > cur && cur > b) {
      c = b;
      b = cur;
    } else if (b > cur && cur > c) {
      c = cur;
    }
  }

  return c === -Number.MAX_VALUE ? a : c;
};
// @lc code=end

