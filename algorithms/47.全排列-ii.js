/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length === 1) return [nums];
  let result = [];
  let visited = new Array(nums.length).fill(false);
  const _DFS = (depth, path) => {
    if (depth === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if ((i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) || visited[i]) {
        continue;
      }
      visited[i] = true;
      path.push(nums[i]);
      _DFS(depth + 1, path);
      path.pop();
      visited[i] = false;
    }
  };
  nums.sort((x, y) => x - y);
  _DFS(0, []);
  return result;
};
// permuteUnique([1, 1, 2]);
// @lc code=end