/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let ans = new Array(nums1.length).fill(-1);

  nums1.forEach((n, i) => {
    let index = nums2.indexOf(n);
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > n) {
        ans[i] = nums2[j];
        break;
      }
    }
  });
  return ans;
};
// @lc code=end

