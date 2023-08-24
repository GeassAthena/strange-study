/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) return root;
  let stack = [root];
  let prev = null;

  while (stack.length) {
    let cur = stack.pop();
    if (cur) {
      if (prev) {
        prev.left = null;
        prev.right = cur;
      }
      if (cur.right) stack.push(cur.right);
      if (cur.left) stack.push(cur.left);
      prev = cur;
    }
  }

};
// @lc code=end

