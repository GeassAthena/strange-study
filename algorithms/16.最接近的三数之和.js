/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let closeNum = nums[0] + nums[1] + nums[2]
  let curSum
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      curSum = nums[i] + nums[l] + nums[r]
      if (Math.abs(curSum - target) < Math.abs(closeNum - target)) {
        closeNum = curSum
      }
      if (curSum > target) {
        r--
      } else if (curSum < target) {
        l++
      } else {
        return curSum
      }
    }
  }
  return closeNum
};
threeSumClosest([1,2,4,8,16,32,64,128], 82)
// @lc code=end

