/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  return nums.some((n, i) => {
    let len = nums.length > (i + k) ? (i + k) : nums.length
    for (let j = i + 1; j < i + len; j++) {
      if (n == nums[j]) {
        return true
      }
    }
    return false
  })
};
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
// @lc code=end

