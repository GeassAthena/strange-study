/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  if (k > n) return [];
  let ans = [];
  const dfs = (index, sum, arr) => {
    if (index > k || sum > n) {
      return;
    } 
    if (k === index && sum === n) {
      ans.push(arr.slice());
      return;
    }
    for (let i = arr[arr.length - 1] + 1 || index + 1; i < 10; i++) {
      arr.push(i);
      dfs(index + 1, sum + i, arr);
      arr.pop();
    }
  }

  dfs(0, 0, []);
  return ans;
};
// combinationSum3(3, 9);
// @lc code=end

