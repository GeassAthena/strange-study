/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  // 1.4的幂二进制只有一个1，并且出现在低位开始的第偶数个二进制位上,构造一个奇数位为1的mask，与n做与操作可得
  return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;

  // 2.利用2的幂和4的幂的特性，先筛选出2的幂，用余数为1筛选出4的幂
  // return n > 0 && (n & n - 1) === 0 && n % 3 === 1;

  // 3.常规解法
  // if (n <= 0) return false;
  // while (n > 1) {
  //   if (n % 4 !== 0) {
  //     return false;
  //   }
  //   n /= 4;
  // }
  // return n % 3 === 1;
};
// @lc code=end

