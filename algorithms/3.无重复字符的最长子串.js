/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 时间复杂度：O(N)O(N)，其中 NN 是字符串的长度。左指针和右指针分别会遍历整个字符串一次。
    // 空间复杂度：O(∣Σ∣),字符集大小
    const map = new Set()
    let len = s.length
    let r = -1, ans = 0
    for (i = 0; i< len; i++) {
        if (i != 0) {
            map.delete(s.charAt(i - 1))
        }
        while(r + 1 < len && !map.has(s.charAt(r + 1))) {
            map.add(s.charAt(r + 1))
            r++
        }
        ans = Math.max(ans, r - i + 1)
    }
    return ans
};
// @lc code=end

