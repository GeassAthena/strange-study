/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let low = binarySearch(nums, target, true)
    let high = binarySearch(nums, target, false) - 1

    if (low <= high && high < nums.length && nums[low] === target && nums[high] === target) {
        return [low, high]
    }

    return [-1, -1]
};

var binarySearch = function(nums, target, lower) {
    let low = 0, high = nums.length - 1, ans = nums.length - 1;
    while (low <= high) {
        let pivot = Math.floor((high + low) / 2)
        if (nums[pivot] > target || (lower && nums[pivot] >= target)) {
            high = pivot - 1
            ans = pivot
        } else {
            low = pivot + 1
        }
    }
    return ans
};
// @lc code=end

