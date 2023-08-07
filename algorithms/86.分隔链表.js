/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (!head || !head.next) {
    return head;
  }
  let cur = head;
  let rHead = new ListNode(101, null);
  let rCur = rHead;
  let lHead = new ListNode(101, null);
  let lCur = lHead;

  while (cur) {
    if (cur.val >= x) {
      rCur.next = cur;
      rCur = rCur.next;
    } else {
      lCur.next = cur;
      lCur = lCur.next;
    }
    cur = cur.next;
  }
  if (rHead.next) {
    lCur.next = rHead.next;
  }
  rCur.next = null;
  return lHead.next;
};
// @lc code=end

