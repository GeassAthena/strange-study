/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let h = matrix[0].length, w = matrix.length
    let i = w - 1, j = 0

    while (i >= 0 && j < h) {
        let c = matrix[i][j]
        if (target === c) {
            return true
        } else if (target > c) {
            j++
        } else {
            i--
        }
    }

    return false
};
// @lc code=end

