/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  if (!root) return []
  let ans = []
  let nodeArr = [root]
  while (nodeArr.length) {
    let cur = nodeArr.pop()
    if (cur) {
      if (cur.right) nodeArr.push(cur.right)
      if (cur.left) nodeArr.push(cur.left)
      nodeArr.push(cur)
      nodeArr.push(null)
    } else {
      ans.push(nodeArr.pop().val)
    }
  }
  return ans
};
// @lc code=end

