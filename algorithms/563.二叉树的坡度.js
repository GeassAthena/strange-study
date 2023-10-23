/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function(root) {
  if (!root) return 0;
  let ans = 0;

  const calc = (node) => {
    let sum = node.val;
    let leftSum = 0, rightSum = 0;
    if (node.left) {
      leftSum = calc(node.left);
      sum += leftSum;
    }
    if (node.right) {
      rightSum = calc(node.right);
      sum += rightSum;
    }
    ans += Math.abs(leftSum - rightSum);
    return sum;
  }

  calc(root);
  return ans;
};
// @lc code=end

