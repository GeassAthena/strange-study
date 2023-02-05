/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const len = s.length
    if (len % 2 === 1) return false

    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    const stack = []
    for (let ch of s) {
        if (map[ch]) {
            stack.push(ch)
        } else {
            if (!stack.length || map[stack.pop()] !== ch) {
                return false
            }
        }
    }
    return !stack.length
};
// @lc code=end

