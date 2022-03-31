/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return []
  let ans = []
  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  let backtrack = function (combination, nextDigit) { 
    if (nextDigit.length) {
      map[nextDigit.charAt(0)].forEach(key => {
        backtrack(combination + key, nextDigit.slice(1))
      })
    } else {
      ans.push(combination)
    }
  }
  backtrack('', digits)
  return ans
};
letterCombinations('23')
// @lc code=end

