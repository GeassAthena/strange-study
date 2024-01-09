/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) return [];
    const result = [];
    // 递归
    // const dfs = (node) => {
    //   if (!node) return;
    //   if (node.children && node.children.length) {
    //     node.children.forEach(child => dfs(child));
    //   }
    //   result.push(node.val);
    // }
    // dfs(root);
    // 迭代
    let stack = [root];
    let stack1 = [];
    while (stack.length) {
      let cur = stack.pop();
      stack1.push(cur);
      if (cur.children && cur.children.length) {
        cur.children.forEach(child => {
          stack.push(child);
        });
      }
    }
  
    while (stack1.length) {
      result.push(stack1.pop().val);
    }
    return result;
  };
  // @lc code=end
  
  