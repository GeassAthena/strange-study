/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  num += '';
  const arr = num.split('')
  let res = arr.reduce((acc, cur) => {
    return acc + +cur;
  }, 0)

  return res < 10 ? res : addDigits(res);
};
// @lc code=end

