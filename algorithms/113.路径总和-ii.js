/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let ans = []
    let path = []

    const dfs = (root, target) => {
        if (!root) return

        path.push(root.val)
        target -= root.val

        if (!root.left && !root.right && target === 0) {
            ans.push([...path])
            return
        }

        dfs(root.left, target)
        dfs(root.right, target)
        path.pop()
    }

    dfs(root, targetSum)

    return ans
};
// @lc code=end

