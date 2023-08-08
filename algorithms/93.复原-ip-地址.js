/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const results = [];

  const backtrace = (strArr, index) => {
    if (strArr.length === 4 && index === s.length) {
      results.push(strArr.join('.'));
      return;
    }
    if (strArr.length === 4 && index !== s.length) {
      return;
    }

    for (let i = 1; i <= 3; i++) {
      if (i + index > s.length) return;
      if (i > 1 && s[index] === '0') return;

      const str = s.substring(index, index + i);
      if (+str > 255) return;

      strArr.push(str);
      backtrace(strArr, index + i);
      strArr.pop();
    }
  }

  backtrace([], 0);

  return results;
};
// restoreIpAddresses('25525511135');
// @lc code=end

