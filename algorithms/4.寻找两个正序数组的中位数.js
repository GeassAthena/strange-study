/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const newArr = [...nums1, ...nums2];newArr.sort((a, b) => a - b);
  const len = newArr.length;
  if (len % 2 === 0) {
    return (newArr[len / 2] + newArr[len / 2 - 1]) / 2
  }
  return newArr[(len - 1) / 2]
};
// @lc code=end

