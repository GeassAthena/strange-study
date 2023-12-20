/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xor = 0;
    nums.forEach(n => {
      xor ^= n;
    })
    let lowbit = xor & (-xor);
    let type1 = 0, type2 = 0;
  
    nums.forEach(n => {
      if (n & lowbit) {
        type1 ^= n;
      } else {
        type2 ^= n;
      }
    })
  
    return [type1, type2];
  };
  // @lc code=end
  
  