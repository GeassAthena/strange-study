/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

// dfs 递归解法
var binaryTreePaths_DFS_recursion = function(root) {
    // 时间复杂度：O(N^2)
    // 空间复杂度：O(N^2)
    const paths = []
    const _DFS = (root,  path) => {
        if (root) {
            path += root.val.toString()
            if (root.left === null && root.right === null) {
                // 叶子节点加入paths
                paths.push(path)
            } else {
                path += '->'
                _DFS(root.left, path)
                _DFS(root.right, path)
            }
        }
    }

    _DFS(root, '')
    return paths
};

// dfs解法 非递归 前序遍历 进栈顺序 根、左、右
var binaryTreePaths = function(root) {
    // 时间复杂度：O(N^2)
    // 空间复杂度：O(N^2)
    const paths = []
    if (root) {
        // let path = node.val
        let stack = [root]
        root.path = root.val.toString()
        while (stack.length) {
            let node = stack.pop()
            if (node.right) {
                stack.push(node.right)
                node.right.path = node.path + '->' + node.right.val.toString()
            }
            if (node.left) {
                stack.push(node.left)
                node.left.path = node.path + '->' + node.left.val.toString()
            }
            if (node.left === null && node.right === null) {
                paths.push(node.path)
            }
        } 
    }
    return paths
};

// bfs解法
var binaryTreePaths_bfs = function(root) {
    // 时间复杂度：O(N^2)
    // 空间复杂度：O(N^2)
    const paths = []
    const path_queue = [root.val.toString()]
    const node_queue = [root]

    while (node_queue.length) {
        let curNode = node_queue.shift()
        let curPath = path_queue.shift()

        if (curNode.left === null && curNode.right === null) {
            paths.push(curPath)
        } else {
            if (curNode.left !== null) {
                node_queue.push(curNode.left)
                path_queue.push(curPath + '->' + curNode.left.val.toString())
            }
            if (curNode.right !== null) {
                node_queue.push(curNode.right)
                path_queue.push(curPath + '->' + curNode.right.val.toString())
            }
        }
    }
    return paths
};
// @lc code=end

