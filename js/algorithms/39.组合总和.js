/*
 * @Author: bing.ma
 * @Date: 2022-03-29 10:05:57
 * @LastEditTime: 2022-03-31 16:06:39
 * @LastEditors: bing.ma
 * @Description: 
 * @FilePath: /strange-study/js/algorithms/39.组合总和.js
 */
/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和 题解 https://leetcode-cn.com/problems/combination-sum/comments/
 * 归属：回溯法 的 关键: 1.一条路走到黑;2.回退一步;3.另寻他路
 * 使用for循环 和 递归 实现回溯，for循环另寻他路，递归回退和一条路走到黑
 * def backward():
    if (回朔点）：# 这条路走到底的条件。也是递归出口
        保存该结果
        return   
    else:
        for route in all_route_set :  逐步选择当前节点下的所有可能route
            if 剪枝条件：
                剪枝前的操作
                return   #不继续往下走了，退回上层，换个路再走
            else：#当前路径可能是条可行路径
                保存当前数据  #向下走之前要记住已经走过这个节点了。例如push当前节点
                self.backward() #递归发生，继续向下走一步了。
                
                回朔清理     # 该节点下的所有路径都走完了，清理堆栈，准备下一个递归。例如弹出当前节点
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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
      path.push(candidates[i])
      _DFS(curTarget - candidates[i], i)
      path.pop()
    }
  }

  _DFS(target, 0)
  return result
};
// combinationSum([3,12,9,11,6,7,8,5,4], 15)
// @lc code=end

