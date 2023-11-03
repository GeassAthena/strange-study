/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (p.val > q.val) {
      let temp = p;
      p = q;
      q = temp;
    }
  
    let target = root;
  
    const dfs = (node) => {
      if (node.val >= p.val && node.val <= q.val) {
        target = node;
        return;
      } else if (node.val > q.val) {
        dfs(node.left);
      } else {
        dfs(node.right);
      }
    }
  
    dfs(root);
  
    return target;
  };
  // @lc code=end
  
  