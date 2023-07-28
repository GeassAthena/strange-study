/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (target < matrix[0][0]) return false;
  const m = matrix.length, n = matrix[0].length;
  let findTarget = false;
  let targetM = 0;
  for(let i = 0; i < m; i++) {
    const cur = matrix[i][n - 1];
    if (cur === target) {
      findTarget = true;
      break;
    } else if (cur > target) {
      targetM = i;
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    const cur = matrix[targetM][i];
    if (cur === target) {
      findTarget = true;
      break;
    }
  }

  return findTarget;
};
// @lc code=end