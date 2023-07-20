/*
 * @lc app=leetcode.cn id=786 lang=javascript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
  let len = arr.length;
  if (len === 2) return [...arr];
  let row = 0, col = 0;

  while (true) {
    const curLen = len - col - 1;
    let cur = Math.floor(curLen * (curLen - 1) / 2) + 1 + row
    if (k === cur) {
      break;
    } else if (k > cur) {
      row++;
    } else {
      col++;
    }
  }

  return [arr[row], arr[row + col + 1]];
};
console.log(kthSmallestPrimeFraction([1,13,17,59],
  6))
// @lc code=end

