/*
 * @Author: bing.ma
 * @Date: 2021-12-15 16:14:27
 * @LastEditTime: 2022-03-29 10:49:52
 * @LastEditors: bing.ma
 * @Description: 
 * @FilePath: /strange-study/js/algorithms/31.下一个排列.js
 */
/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if (nums.length === 1) return;
  let i = nums.length - 2;
  // 找到索引最大的相邻升序
  while (i >= 0 && nums[i] >= nums[i+1]){
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    // 从右往左寻找第一个比nums[i]大的数并交换
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    // swap
    [nums[j], nums[i]] = [nums[i], nums[j]]
  }
  // 排序 i 右边的数组
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r){
    [nums[l], nums[r]] = [nums[r], nums[l]]
    l++
    r--
  }
};
// nextPermutation([1,3,2])
// @lc code=end

