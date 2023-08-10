/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  s = s.split('');
  let target = ['a', 'e', 'i', 'o', 'u'];
  let vArr = [];
  for (let i = 0; i < s.length; i++) {
    if (target.includes(s[i].toLowerCase())) {
      vArr.push(i);
    }
  }
  let len = vArr.length;
  let len1 = Math.floor(len / 2)
  for (let i = 0; i < len1; i++) {
    let l = vArr[i], r = vArr[len - i - 1];
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
  }
  return s.join('');
};
// @lc code=end

