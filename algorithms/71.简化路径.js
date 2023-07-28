/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const arr = path.split('/').filter(item => item);
  const result = [];

  arr.forEach((dir, i) => {
    if (dir === '.') {
    } else if (dir === '..') {
      result.pop();
    } else {
      result.push(dir);
    }
  })

  return '/' + result.join('/');
};
// console.log(simplifyPath('/...'))
// @lc code=end

