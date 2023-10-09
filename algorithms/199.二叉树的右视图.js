/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];
  let ans = [], stack = [root];

  while (stack.length) {
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let cur = stack.shift();
      if (i === len - 1) ans.push(cur.val);
      if (cur.left) stack.push(cur.left);
      if (cur.right) stack.push(cur.right);
    }
  }

  return ans;
};
// @lc code=end

