/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// dp解法
var numDecodings = function (s) {
  let n = s.length;
  if (n[0] === '0') return 0;

  // 优化去掉数组使用, a = dp[i], b = dp[i - 1], c = dp[i - 2]
  let a = 0, b = 1, c = 0;

  for (let i = 1; i <= n; i++) {
    a = 0;
    if (s[i - 1] !== '0') {
      a += b;
    }
    if (i > 1 && s[i - 2] != '0' && ((s[i - 2] - '0') * 10 + (s[i - 1] - '0') <= 26)) {
      a += c;
    }
    c = b;
    b = a;
  }

  return a;
};
// 递归回溯解法，超时
// var numDecodings = function(s) {
//   let n = s.length;
//   if (n[0] === '0') return 0;
//   let memo = {};

//   const backtrace = (curIndex) => {
//     if (memo[curIndex]) {
//       return memo[curIndex];
//     }
//     if(curIndex > n - 1) {
//       return 1;
//     }
//     if (s[curIndex] === '0') {
//       return 0;
//     }
//     let count = backtrace(curIndex + 1);
//     memo[curIndex + 1] = count;
//     if (curIndex < n - 1 && (+s[curIndex] * 10 + +s[curIndex + 1] <= 26)) {
//       let temp2 = backtrace(curIndex + 2);
//       memo[curIndex + 2] = temp2;
//       count += temp2;
//     }
//     return count;
//   }
//   let ans = backtrace(0)
//   return ans;
// };
numDecodings('111111111111111111111111111111111111111111111');
// @lc code=end

