/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  // let len = s.length;
  // let memo = new Array(len);
  // const dfs = (index) => {
  //   if (index === len) {
  //     return true;
  //   }
  //   if (memo[index] !== undefined) return memo[index];

  //   for (const w of wordDict) {
  //     if (s.startsWith(w, index) && dfs(index + w.length)) {
  //       memo[index + w.length] = true;
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // return dfs(0);
  // 动态规划
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};
// wordBreak("leetcode", ["leet","code"])
// @lc code=end

