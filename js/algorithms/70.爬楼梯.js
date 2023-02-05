/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 2) return 1

    let last = 1
    let ans = 1
    for (let i = 2; i <= n; i++) {
        let temp = ans
        ans += last
        // ans %= 1e9+7
        last = temp
    }

    return ans
};
// @lc code=end

