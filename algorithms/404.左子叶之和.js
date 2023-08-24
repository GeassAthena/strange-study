/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  let sum = 0;

  const dfs = (node) => {
    if (!node) {
      return;
    }

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    } else {
      dfs(node.left)
    }
    dfs(node.right);
  }

  dfs(root);

  return sum;
};
// @lc code=end

// 迭代
var sumOfLeftLeaves = function (root) {
  if (!root) return 0;
  let sum = 0;
  let stack = [root];

  while (stack.length) {
    let node = stack.pop()
    if (node) {
      if (node.left && !node.left.left && !node.left.right) {
        sum += node.left.val;
      } else {
        if (node.left) stack.push(node.left)
      }
      if (node.right) stack.push(node.right)
    }
  }

  return sum;
};

