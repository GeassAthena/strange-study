/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// DP解法
// 时间复杂度：O(n)，其中 n 是给定的正整数。和方法一相比，计算每个整数对应的 dp 的值的时间复杂度降到 O(1)，因此总时间复杂度降到 O(n)。
// 空间复杂度：O(n)，其中 n 是给定的正整数。创建一个数组 dp，其长度为 n+1
var integerBreak = function(n) {
    if (n <= 3) return n -1
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1

    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(...[2 * (i - 2), 2 * dp[i - 2], 3 * (i - 3), 3 * dp[i - 3]])
        
    }
    return dp[n]
};

// 复杂度分析
// 时间复杂度：O(1)。涉及到的操作包括计算商和余数，以及幂次运算，时间复杂度都是常数。
// 空间复杂度：O(1)。只需要使用常数复杂度的额外空间。
var integerBreak_q = function(n) {
    if (n <= 3) return n -1

    let remain = n % 3
    let quotient = Math.floor(n / 3)

    if (remain === 0) {
        return Math.pow(3, quotient)
    } else if (remain === 1) {
        return Math.pow(3, quotient - 1) * 4
    } else {
        return Math.pow(3, quotient) * 2
    }
};
// @lc code=end

