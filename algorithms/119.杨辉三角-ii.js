/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let res = [1]
  let tempRes = []
  for (let i = 1; i <= rowIndex; i++) {
    tempRes[0] = res[0]
    tempRes[res.length] = res[res.length - 1]
    for(let j = 1; j < res.length; j++) {
      tempRes[j] = res[j - 1] + res[j]
    }
    res = tempRes
    tempRes = []
  }
  return res
};
// @lc code=end
