/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
let memo = {};
var diffWaysToCompute = function(expression) {
  if (memo[expression]) {
    return memo[expression];
  }
  let len = expression.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    let c = expression.charAt(i);
    if (['+', '-', '*'].includes(c)) {
      let left = diffWaysToCompute(expression.substring(0, i));
      let right = diffWaysToCompute(expression.substring(i + 1));

      for (let a of left) {
        for (let b of right) {
          switch (c) {
            case "*":
              res.push(a * b);
              break;
            case "+":
              res.push(a + b);
              break;
            case "-":
              res.push(a - b);
              break;
          }
        }
      }
    }
  }

  if (!res.length) {
    res.push(+expression);
  }
  memo[expression] = res;

  return res;
};


// @lc code=end

