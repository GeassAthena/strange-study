/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let len = preorder.length
    
    const buildMyTree = (p_l, p_r, i_l, i_r) => {
        if (p_l > p_r) return null
        let root = new TreeNode(preorder[p_l])
        let mid_index = inorder.indexOf(preorder[p_l])

        let sub_left_size = mid_index - i_l

        root.left = buildMyTree(p_l + 1, p_l + sub_left_size, i_l, mid_index - 1)
        root.right = buildMyTree(p_l + sub_left_size + 1, p_r, mid_index + 1, i_r)
        return root
    }

    return buildMyTree(0, len - 1, 0, len - 1)
};
// @lc code=end

