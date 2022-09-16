/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length === 1) return [nums]
  let result = []
  let visited = new Array(nums.length).fill(false)
  const _DFS = (depth, path) => {
    if (depth === nums.length) {
      result.push([...path])
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true
        path.push(nums[i])
        _DFS(depth + 1, path)
        path.pop()
        visited[i] = false
      }
    }
  }
  _DFS(0, [])
  return result
};
// @lc code=end

