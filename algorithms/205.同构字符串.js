/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  let map1 = {}
  let map2 = {}
  let cura = ''
  let curb = ''
  for (let i = 0; i < s.length; i++) {
    cura = s.charAt(i)
    curb = t.charAt(i)
    if (!map1.hasOwnProperty(cura)) {
      map1[cura] = curb
    }
    if (!map2.hasOwnProperty(curb)) {
      map2[curb] = cura
    }
    if (map1[cura] != curb || map2[curb] != cura) {
      return false
    }
  }
  return true
};
// @lc code=end

