/*
 * @lc app=leetcode.cn id=274 lang=javascript
 *
 * [274] H 指数
 */

// @lc code=start
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => a - b);
    let len = citations.length;
    let h = 0;
    for (let i = len - 1; i >= 0; i--) {
      if (citations[i] > h) {
        h++;
      } else {
        break;
      }
    }
  
    return h;
  };
  // @lc code=end
  
  // 二分法
  /**
 * @param {number[]} citations
 * @return {number}
 */
// var hIndex = function(citations) {
//     let left = 0, right = citations.length
//     while (left<right){
//         // +1 防止死循环
//         let mid = Math.floor((left + right + 1) / 2)
//         let cnt = 0
//         for (let v of citations){
//             if (v >= mid){
//                 cnt+=1
//             }
//         }
//         if(cnt>=mid){
//             // 要找的答案在 [mid,right] 区间内
//             left=mid
//         }else{
//             // 要找的答案在 [0,mid) 区间内
//             right=mid-1
//         }
//     }
//     return left
// };

// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/h-index/solutions/869042/h-zhi-shu-by-leetcode-solution-fnhl/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  