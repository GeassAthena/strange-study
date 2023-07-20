/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
    // 时间复杂度：O(n)，其中 nn 为二叉树节点个数，每一个节点仅会进出队列一次。
    // 空间复杂度：O(n)，存储二叉树节点的空间开销。
    const vals = []
    
    if (root) {
        let queue = []
        // let stackR = []
        queue.push(root)

        while (queue.length) {
            let len = queue.length
            let maxVal = -Number.MAX_VALUE

            while (len > 0) {
                let node = queue.shift()
                if (node.val > maxVal) {
                    maxVal = node.val
                }

                if (node.left) {
                    queue.push(node.left)
                }
                if (node.right) {
                    queue.push(node.right)
                }
                len--
            }
            vals.push(maxVal)
        }
        
        // while(true) {
        //     let max
        //     while (stackL.length) {
        //         let node = stackL.shift()
        //         if (typeof(max) === 'undefined' || max < node.val) {
        //             max = node.val
        //         }
        //         if (node.left) {
        //             stackR.push(node.left)
        //         }
        //         if (node.right) {
        //             stackR.push(node.right)
        //         }
        //     }
        //     vals.push(max)
        //     if (stackR.length) {
        //         stackL = stackR
        //         stackR = []
        //     } else {
        //         break
        //     }
        // }

    }

    return vals
};
// @lc code=end

