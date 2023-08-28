/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
var recoverTree = function(root) {
  if (root === null) return;
  let stack = [], cur = root;
  let x = null, y = null, pred = null;

  while (stack.length || cur !== null) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    let temp = stack.pop();
    if (pred !== null && temp.val < pred.val) {
      y = temp;
      if (x === null) {
        x = pred;
      } else {
        break;
      }
    }
    pred = temp;
    cur = temp.right;
  }
  let temp = x.val;
  x.val = y.val;
  y.val = temp;
};
// @lc code=end

