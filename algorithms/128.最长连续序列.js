/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set(nums);

  let maxLen = 0;
  for (const n of set) {
    if (!set.has(n - 1)) {
      let cur = n + 1, curLen = 1;
      while (set.has(cur++)) {
        curLen++;
      }
      if (curLen > maxLen) {
        maxLen = curLen;
      }
    }
  }

  return maxLen;
};
// @lc code=end

