/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let flag = true
    let j = 0
    for (let i = 0; i < p.length; i++) {
        if (j >= s.length) {
            flag = false
            break
        }
        let ch = p.charAt(i)
        if (ch === '*') {
            let lastCh = p.charAt(i - 1)
            if (lastCh === '.') {

            } else {
                while (s.charAt(j) === lastCh) {
                    j++
                }
            }
        } else if (ch === '.') {
            j++
        } else {
            if (ch !== s.charAt(j)) {
                flag = false
                break
            }
            j++
        }
    }

    return flag && j === s.length
};
// @lc code=end

