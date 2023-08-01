/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let targetSum = 0;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    if (i === 0 || nums[i] === nums[i - 1]) {
      targetSum++;
    } else {
      targetSum = 1;
    }
    if (targetSum > 2) {
      for (let j = i; j < len - 1; j++) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
      targetSum--;
      len--;
      i--;
    }
  }

  return len;
};
// removeDuplicates([0,0,1,1,1,1,2,3,3]);
// @lc code=end

