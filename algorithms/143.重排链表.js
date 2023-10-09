/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head || !head.next) return;
  let fast = head, slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  let prev = null, cur = slow.next;
  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  slow.next = null;
  cur = head;
  while (prev) {
    let temp1 = cur.next;
    let temp2 = prev.next;
    prev.next = temp1;
    cur.next = prev;
    cur = temp1;
    prev = temp2;
  }
};
// @lc code=end

