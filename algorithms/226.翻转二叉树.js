/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root
    let queue = [root]

    while (queue.length) {
        let cur = queue.shift()
        let temp = cur.right
        cur.right = cur.left
        cur.left = temp

        if (cur.left) {
            queue.push(cur.left)
        }
        if (cur.right) {
            queue.push(cur.right)
        }
    }
    return root
};

var invertTree_rec = function(root) {
    if (!root) return root
    let temp = invertTree(root.right)
    root.right = invertTree(root.left)
    root.left = temp
    return root
};
// @lc code=end

