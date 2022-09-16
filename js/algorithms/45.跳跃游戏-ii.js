/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 * 贪心算法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const len = nums.length
  if (len === 1) return 0
  let step = 0
  let end = 0
  let k = 0
  for (let i = 0; i < len; i++) {
    k = Math.max(k, i + nums[i]);
    /*
    0  1  2  3  4  5  6 
    i
              j
    比如第一步从 0 最远能够跳到 3, step = 1
    那么我们在遍历过程中发现在 1 2 3 中如果是 2 它的最远距离 k 能够跳到终点或终点后面，那么我们只需要 再加 1 步从 2 起跳就能到达终点
    因为我们是按照到 end 才进行步数 + 1，但是对于 2 位置来说，它的终点的 len - 1 之后的
    因此如果要提前返回的话，那么我们需要将 2 起跳的这一步加上，因此是 step + 1
    */
    if(k >= len - 1){
      return step + 1;
    }
    /*
    我们什么时候需要步数 + 1？
    当到达上一步的最远距离的时候，那么意味着我们需要进行一次新的起跳，那么步数 + 1
    并且更新最远距离
    */
    if(end == i){
      step++;
      end = k;
    }
  }
  return step
};
// @lc code=end

