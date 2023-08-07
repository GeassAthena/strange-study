/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  let result = [0];
  for (let i = 1; i <= n; i++) {
    let len = result.length;
    for (let j = len - 1; j >= 0; j--) {
      result.push(result[j] | (1 << (i - 1)))
    }
  }
  return result;
};

// grayCode(3)
// @lc code=end

