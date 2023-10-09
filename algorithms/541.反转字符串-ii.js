/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let len = s.length;
  let ss = s.split('');
  let ans = '';
  for (let i = 0; i < len;) {
    let rest = len - i;
    if (rest <= k) {
      ans += ss.slice(i).reverse().join('');
    } else {
      ans += ss.slice(i, i + k).reverse().join('');
      ans += ss.slice(i + k, i + k * 2).join('');
    }
    i += 2 * k;
  }
  
  return ans;
};
// @lc code=end

