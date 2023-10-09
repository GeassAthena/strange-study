/*
 * @lc app=leetcode.cn id=173 lang=javascript
 *
 * [173] 二叉搜索树迭代器
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
 */
var BSTIterator = function(root) {
  this.nodes = [];
  this.index = 0;
  var midOrder = (node) => {
    if (!node) return;
    if (node.left) {
      midOrder(node.left);
    }
    this.nodes.push(node);
    if (node.right) {
      midOrder(node.right);
    }
  }
  midOrder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  if (this.index >= this.nodes.length) {
    return null;
  }
  return this.nodes[this.index++].val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.index < this.nodes.length
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

