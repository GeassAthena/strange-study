/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  const dfs = (l, r) => {
    if (l > r) {
      return [null];
    }

    let ans = [];

    for (let i = l; i <= r; i++) {
      let leftTrees = dfs(l, i - 1);
      let rightTrees = dfs(i + 1, r);

      for (let lTree of leftTrees) {
        for (let rTree of rightTrees) {
          ans.push(new TreeNode(i, lTree, rTree))
        }
      }
    }

    return ans;
  }

  return dfs(1, n);
};
// @lc code=end

