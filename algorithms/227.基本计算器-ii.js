/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let ss = s.replaceAll(' ', '').split('');
  let lastOp = '+';
  let stack = [], num = 0;
  for (let i = 0; i < ss.length; i++) {
    if (!isNaN(ss[i])) {
      num = num * 10 + Number(ss[i]);
    }
    if (isNaN(ss[i]) || i === ss.length - 1) {
      switch (lastOp) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          let n = stack.pop();
          stack.push(n > 0 ? Math.floor(n / num) : Math.ceil(n / num));
          break;
      }
      lastOp = ss[i];
      num = 0;
    }
  }

  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }

  return ans;
};

// calculate('14-3/2')
// @lc code=end

