/*
 * @Author: bing.ma
 * @Date: 2022-03-31 16:12:24
 * @LastEditTime: 2022-03-31 16:50:58
 * @LastEditors: bing.ma
 * @Description: 
 * @FilePath: /strange-study/js/algorithms/40.组合总和-ii.js
 */
/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length === 0) {
    return []
  }
  candidates.sort((a, b) => a - b)
  let path = []
  let result = []
  
  const _DFS = function (curTarget, curIndex) {
    if (curTarget === 0) {
      result.push(path.slice())
      return
    }
    for (let i = curIndex; i < candidates.length; i++) {
      if (curTarget < candidates[i]) {
        return
      }
      // 去重的关键在于 数字可以重复但是组合不能重复，有点似懂非懂的感觉，人傻了，脑子转的慢了
      if ((i > curIndex && candidates[i] === candidates[i - 1])) {
        continue
      }
      path.push(candidates[i])
      // 与39的区别在于 同一数字不重复使用 所以 + 1
      _DFS(curTarget - candidates[i], i + 1)
      path.pop()
    }
  }

  _DFS(target, 0)
  return result
};
// @lc code=end

