/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let matrix = new Array(n).fill(1).map(i => new Array(n));
    let cur = 0;
  
    while (cur < Math.pow(n, 2)) {
      let i = left;
      for(;i <= right; i++) {
        matrix[top][i] = ++cur;
      }
      let j = top + 1;
      for(;j <= bottom; j++) {
        matrix[j][right] = ++cur;
      }
      let k = right - 1;
      for(;k >= left; k--) {
        matrix[bottom][k] = ++cur;
      }
      let l = bottom - 1;
      for(;l > top; l--) {
        matrix[l][left] = ++cur;
      }
  
      [top, left, right, bottom] = [++top, ++left, --right, --bottom]
    }
  
    return matrix;
  };
  // generateMatrix(3);
  // @lc code=end