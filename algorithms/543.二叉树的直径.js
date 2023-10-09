/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
  let max = 0;

  const dfs = (node) => {
    if (!node) return 0;

    let lDepth = 0, rDepth = 0;
    if (node.left) {
      lDepth = dfs(node.left) + 1;
    }
    if (node.right) {
      rDepth = dfs(node.right) + 1;
    }
    max = Math.max(lDepth + rDepth, max);
    return Math.max(lDepth, rDepth);
  }

  dfs(root);
  return max;
};
// @lc code=end

