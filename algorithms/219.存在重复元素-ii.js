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
  if (nums.length < 2) return false;
  let duplicate = false;
  const len = nums.length;
  for(let i = 0; i < len - 1; i++) {
    // console.log(nums.slice(i + 1));
    let newArr = nums.slice(i + 1)
    // console.log(nums.slice(i + 1));
    const nextIndex = newArr.indexOf(nums[i]);
    if (nextIndex !== -1 && nextIndex < k) {
      duplicate = true;
      break;
    }
  }
  return duplicate;
};
// console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
// @lc code=end

