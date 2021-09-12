/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  if (!root) return []
  let ans = []
  let nodeArr = [root]
  while (nodeArr.length) {
    let cur = nodeArr.pop()
    if (cur) {
      nodeArr.push(cur)
      nodeArr.push(null)
      if (cur.right) nodeArr.push(cur.right)
      if (cur.left) nodeArr.push(cur.left)
    } else {
      ans.push(nodeArr.pop().val)
    }
  }
  return ans
};
// @lc code=end