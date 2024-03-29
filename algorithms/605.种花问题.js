/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let len = flowerbed.length;
    let cnt = 0;
    for (let i = 0; i < len; ++i) {
      if ((i == 0 || flowerbed[i - 1] == 0) && flowerbed[i] == 0 && (i === len - 1 || flowerbed[i + 1] === 0)) {
        flowerbed[i] = 1;
        cnt++;
      }
    }
    return cnt >= n;
  };
  // @lc code=end
  
  