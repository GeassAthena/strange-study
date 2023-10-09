/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
  if (!root) return [];
  let cur = 0, cnt = 0, maxCnt = 0, ans = [];

  const dfs = (node) => {
    if (node.left) dfs(node.left);
    if (node.val === cur) {
      cnt++;
    } else {
      cur = node.val;
      cnt = 1;
    }
    if (cnt > maxCnt) {
      ans = [cur];
      maxCnt = cnt;
    } else if (cnt === maxCnt) {
      ans.push(cur);
    }
    if (node.right) dfs(node.right);
  }
  dfs(root);

  return ans;
};
// @lc code=end

