/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  if (!node) return null;
  let map = new Map();
  const clone = (node) => {
    let cloneNode = new Node(node.val, []);
    map.set(cloneNode.val, cloneNode);
    for (let i = 0; i < node.neighbors.length; i++) {
      let cur = node.neighbors[i];
      if (map.has(cur.val)) {
        cloneNode.neighbors.push(map.get(cur.val))
      } else {
        cloneNode.neighbors.push(clone(cur));
      }
    }
    return cloneNode;
  }
  
  return clone(node);
};
// @lc code=end

