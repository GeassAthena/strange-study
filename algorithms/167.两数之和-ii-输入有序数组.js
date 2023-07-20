/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let ans = []
  let l = 0
  let r = numbers.length - 1
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      ans[0] = l + 1
      ans[1] = r + 1
      break
    } else if (numbers[l] + numbers[r] > target) {
      r--
    } else {
      l++
    }
  }
  return ans
};
// @lc code=end

