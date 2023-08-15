/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  const findMid = (left, right) => {
    let slow = left;
    let fast = left;

    while (fast !== right && fast.next !== right) {
      fast = fast.next;
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }
  const buildTree = (left, right) => {
    if (left === right) {
      return null;
    }
    let mid = findMid(left, right);
    let root = new TreeNode(mid.val);
    let leftNode = buildTree(left, mid);
    let rightNode = buildTree(mid.next, right);
    root.left = leftNode;
    root.right = rightNode;

    return root;
  }

  let root = buildTree(head, null);
  return root;
};
// @lc code=end

