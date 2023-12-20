/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    if (!root || !subRoot) return false;
    if (root.val === subRoot.val && dfs(root.left, subRoot.left) && dfs(root.right, subRoot.right)) {
      return true
    } else {
      return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }
  };
  
  var dfs = (root, subRoot) => {
    if (!root && !subRoot) return true;
    if (!root || !subRoot) return false;
    if(root.val !== subRoot.val) return false;
    return isSame(root.left, subRoot.left) && isSame(root.right, subRoot.right);
  }
  // @lc code=end
  
  