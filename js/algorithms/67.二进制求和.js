/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = [];
  let i = a.length - 1;
  let j = b.length - 1;
  let add = 0;
  while(i >= 0 && j >= 0) {
    res.push(a.charAt(i) ^ b.charAt(j) ^ add)
    add = (a.charAt(i) & b.charAt(j)) | ((a.charAt(i) ^ b.charAt(j)) & add)
    i--;
    j--;
  }
  while (i >= 0) {
    res.push(a.charAt(i) ^ add)
    add = a.charAt(i) & add
    i--
  }
  while (j >= 0) {
    res.push(b.charAt(j) ^ add)
    add = b.charAt(j) & add
    j--
  }
  if (add) {
    res.push('1')
  }
  return res.reverse().join("");
};

// console.log(addBinary('1', '111'))
// @lc code=end
