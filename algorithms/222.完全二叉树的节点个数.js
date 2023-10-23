/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
var countNodes = function(root) {
  if (!root) return 0;
  const findH = (node) => {
    let cur = node, h = 1;
    while (cur.left) {
      h++;
      cur = cur.left;
    }
    return h;
  }
  let maxH = findH(root);
  let count = Math.pow(2, maxH + 1) - 1;
  return count;
};
// @lc code=end

