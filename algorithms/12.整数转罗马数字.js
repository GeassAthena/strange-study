/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let wMap = ['I', 'X', 'C', 'M']
  let rMap = ['V', 'L', 'D']
  let ans = ''
  let i = 3
  while (i >= 0) {
    let base = Math.pow(10, i)
    let res = parseInt(num / base)
    num %= base
    if (i !== 3) {
      if (res == 9) {
        ans += wMap[i]
        ans += wMap[i + 1]
        res = 0
      } else {
        if (res >= 5) {
          ans += rMap[i]
          res -= 5
        } else if (res == 4) {
          ans += wMap[i]
          ans += rMap[i]
          res = 0
        }
      }
    }

    for (let index = 0; index < res; index++) {
      ans += wMap[i]
    }
    i--
  }
  return ans
};
// @lc code=end

