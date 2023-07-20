/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  let ans = []
  for(let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 2; j++) {      
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let l = j + 1
      let r = nums.length - 1
      while (l < r) {
        let sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[l], nums[r]])
          while(l < r && nums[l] === nums[l + 1]) { l++ };
          while(l < r && nums[r] === nums[r - 1]) { r-- };
          l++;
        	r--;
        } else if (sum > target) {
          r--
        } else {
          l++
        }
      }
    }
  }
  return ans
};
// fourSum([-1,0,-5,-2,-2,-4,0,1,-2], -9)
// @lc code=end

