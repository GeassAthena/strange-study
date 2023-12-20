/*
 * @lc app=leetcode.cn id=275 lang=javascript
 *
 * [275] H 指数 II
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let n = citations.length;
    let l = 1, r = n;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (citations[n - mid] >= mid) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
    return r;
  };
  // @lc code=end
  
  