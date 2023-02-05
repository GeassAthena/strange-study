/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) return 0
    if (n === 1) return 1

    let ans = 1
    let last = 0
    for (let i = 2; i <= n; i++) {
        let temp = ans
        ans += last
        last = temp
    }

    return ans
};
// fib(4)
// @lc code=end

