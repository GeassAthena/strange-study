/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let ss = s.trim().split(' ')
    return ss.length == 0 ? 0 : ss[ss.length - 1].length
};
// @lc code=end

