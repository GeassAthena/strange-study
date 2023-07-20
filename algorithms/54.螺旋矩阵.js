/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // 时间复杂度 O(m * n)
    // 空间复杂度 O(1)
    const m = matrix.length, n = matrix[0].length
    let res = []
    let left = 0, right = n - 1, top = 0, bottom = m - 1

    while (left <= right && top <= bottom) {
        let i = left
        for (; i <= right; i++) {
            res.push(matrix[top][i])
        }

        for(i = top + 1; i <= bottom; i++) {
            res.push(matrix[i][right])
        }

        if (left < right && top < bottom) {
            for (i = right - 1; i >= left; i--) {
                res.push(matrix[bottom][i])
            }
    
            for (i = bottom - 1; i > top; i--) {
                res.push(matrix[i][left])
            }
        }

        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1]
    }

    return res
};
// @lc code=end

