/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return []
    let res = []
    let stack = [root]
    let newStack = []
    let cur = []
    while (stack.length) {
        stack.forEach(node => {
            cur.push(node.val)
            if (node.left) newStack.push(node.left)
            if (node.right) newStack.push(node.right)
        })
        stack = newStack
        newStack = []
        res.unshift(cur)
        cur = []
    }
    return res
};

// @lc code=end

