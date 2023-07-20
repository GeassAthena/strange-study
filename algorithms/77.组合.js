/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = []
    const path = []

    const helper = (n, k, start) => {
        if (path.length === k) {
            ans.push(Array.from(path))
            return
        }
         
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            helper(n, k, i + 1)
            path.pop()
        }
    }

    helper(n, k, 1)
    return ans
};
// @lc code=end

