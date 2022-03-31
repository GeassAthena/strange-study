/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 * 思路：DFS深度搜索算法
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = []
  let dfsQuota = function (l, r, str){
    if (l === 0 && r === 0) {
      ans.push(str)
      return
    }
    if (l === r) {
      dfsQuota(l - 1, r, str + '(')
    } else if (l < r) {
      if (l !== 0) dfsQuota(l - 1, r, str + '(')
      dfsQuota(l, r - 1, str + ')')
    }
  }
  dfsQuota(n - 1, n, '(')
  return ans
};
// @lc code=end

