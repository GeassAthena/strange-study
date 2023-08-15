/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  let len = postorder.length;
  if (len === 0) return null;
  let rootVal = postorder[len - 1];
  let root = new TreeNode(rootVal, null, null);
  let rootIndex = inorder.indexOf(rootVal);
  let leftInorder = inorder.slice(0, rootIndex);
  let leftPostorder = postorder.slice(0, rootIndex);
  let rightInorder = inorder.slice(rootIndex + 1, len);
  let rightPostorder = postorder.slice(rootIndex, len - 1);
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);

  return root;
};
// @lc code=end

