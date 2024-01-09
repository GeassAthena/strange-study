/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = {};
    nums.forEach(n => {
      if (map[n]) {
        map[n]++;
      } else {
        map[n] = 1;
      }
    })
    let max = 0;
    for (const key in map) {
      if (map[+key + 1]) {
        max = Math.max(max, map[key] + map[+key + 1]);
      }
    }
  
    return max;
  };
  
  // findLHS([-1,0,-1,0,-1,0,-1])
  // @lc code=end
  
  