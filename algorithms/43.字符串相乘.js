/*
 * @Author: bing.ma
 * @Date: 2022-04-06 11:00:57
 * @LastEditTime: 2022-04-06 11:42:58
 * @LastEditors: bing.ma
 * @Description: 
 * @FilePath: /strange-study/js/algorithms/43.字符串相乘.js
 */
/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let arr1 = num1.split('').reverse()
  let arr2 = num2.split('').reverse()
  let result = []
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (result.length <= i + j) {
        result.push(+arr1[i] * +arr2[j])
      } else {
        result[i + j] += +arr1[i] * +arr2[j]
      }
    }
  }
  let remain = 0
  for (let i = 0; i < result.length; i++) {
    result[i] += remain
    remain = Math.floor(result[i] / 10)
    result[i] %= 10
  }
  if (remain > 0) {
    result.push(remain)
  }
  return result.reverse().join('')
};
// multiply('123', '456')
// @lc code=end

