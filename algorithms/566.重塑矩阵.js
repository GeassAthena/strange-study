/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  let m = mat.length, n = mat[0].length;
  if (m * n !== r * c) {
    return mat;
  }
  let newMat = new Array(r).fill(0).map(i => new Array(c));
  let index = 0;
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      let x = Math.floor( index/ n);
      let y = index % n;
      newMat[i][j] = mat[x][y]
      index++;
    }
  }
  return newMat;
};
// @lc code=end

