/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  let sum = 0;
  const dfs = (node, s) => {
    if (node.left) {
      dfs(node.left, s + node.val)
    }
    if (node.right) {
      dfs(node.right, s + node.val)
    }
    if (!node.left && !node.right) {
      sum += +(s + node.val);
    }
  }

  dfs(root, '');
  return sum;
};
// @lc code=end

