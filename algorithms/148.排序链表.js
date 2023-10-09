/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head || !head.next) return head;
  let newHead = new ListNode(0, head);
  let cur = head.next;
  let lastSorted = head;
  while (cur) {
    if (lastSorted.val <= cur.val) {
      lastSorted = lastSorted.next;
    } else {
      let prev = newHead;
      while (prev.next.val <= cur.val) {
        prev = prev.next;
      }
      lastSorted.next = cur.next;
      cur.next = prev.next;
      prev.next = cur;
    }
    cur = lastSorted.next;
  }
  return newHead.next;
};
// @lc code=end

