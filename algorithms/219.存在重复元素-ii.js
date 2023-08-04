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
  let duplicate = false;
  const len = nums.length;
  const map = new Map();
  map.set(nums[0], 0);
  for(let i = 1; i < len; i++) {
    let lastIndex = map.get(nums[i]);
    if (lastIndex !== undefined && i - lastIndex <= k) {
      duplicate = true;
      break;
    } else {
      map.set(nums[i], i);
    }
  }
  return duplicate;
};
// containsNearbyDuplicate([1,2,3,1], 3);
// @lc code=end

