/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  let v1 = version1.split('.');
  let v2 = version2.split('.');
  let len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    let temp1 = 0;
    let temp2 = 0;
    if (i < v1.length) {
      temp1 = Number(v1[i]);
    }
    if (i < v2.length) {
      temp2 = Number(v2[i]);
    }
    if (temp1 > temp2) {
      return 1;
    } else if (temp1 < temp2) {
      return -1;
    }
  }

  return 0;
};
// @lc code=end

