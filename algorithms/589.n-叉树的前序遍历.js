/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let stack = [root], res = [];
  
    while (stack.length) {
      let cur = stack.pop();
      if (cur) {
        if (cur.children && cur.children.length) {
          // stack = stack.concat(cur.children.slice().reverse());
          for (let i = cur.children.length - 1; i >= 0; i--) {
            stack.push(cur.children[i]);
          }
        }
        res.push(cur.val);
      }
    }
  
    return res;
  };
  // @lc code=end
  
  