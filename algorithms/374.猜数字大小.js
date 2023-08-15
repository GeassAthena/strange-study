/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let ans = Math.floor(n / 2);
  while (true) {
    let result = guess(ans);
    if (result === -1) {
      ans--;
    } else if (result === 1) {
      ans++;
    } else {
      break;
    }
  }
  return ans;
};
// @lc code=end

